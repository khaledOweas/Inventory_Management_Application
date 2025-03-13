import { ChangeDetectorRef, Component, OnInit } from "@angular/core";

import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state,
  keyframes,
  group,
  animateChild
} from "@angular/animations";
import { MainSpinnerService } from "../../services/main-spinner.service";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-main-spinner",
  standalone: true,
  imports: [NgIf],
  animations: [
    trigger("listAnimation", [
      transition("* => *", [
        query(":leave", [stagger(100, [animate("0.5s", style({ opacity: 0 }))])], { optional: true }),
        query(":enter", [style({ opacity: 0 }), stagger(100, [animate("0.5s", style({ opacity: 1 }))])], {
          optional: true
        })
      ])
    ]),
    trigger("enterAnimation", [
      transition(":enter", [
        style({ transform: "translateX(100%)", opacity: 0 }),
        animate("200ms", style({ transform: "translateX(0)", opacity: 1, "overflow-x": "hidden" }))
      ]),
      transition(":leave", [
        style({ transform: "translateX(0)", opacity: 1 }),
        animate("200ms", style({ transform: "translateX(100%)", opacity: 0 }))
      ])
    ]),
    trigger("slideIn", [
      state("*", style({ "overflow-y": "hidden" })),
      state("void", style({ "overflow-y": "hidden" })),
      transition("* => void", [style({ height: "*" }), animate(250, style({ height: 0 }))]),
      transition("void => *", [style({ height: "0" }), animate(250, style({ height: "*" }))])
    ])
  ],
  template: `<div class="page-overlay-wrapper" *ngIf="showSpinner">
    <div class="svg-spinner">
      <img [@enterAnimation] src="../../../../assets/media/logos/logoSDB.svg" width="290px" style="margin: 0 -40px;" />
      <h3>{{ text }}</h3>
    </div>
  </div>`
})
export class MainSpinnerComponent implements OnInit {
  showSpinner = true;
  lang = typeof localStorage != "undefined" ? localStorage.getItem("language")! : "en";
  text = this.lang == "en" ? "Loading..." : "Laden...";
  constructor(private spinnerService: MainSpinnerService, private cdRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.init();
  }
  init() {
    this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = status == "start";
      this.cdRef.detectChanges();
    });
  }
}
