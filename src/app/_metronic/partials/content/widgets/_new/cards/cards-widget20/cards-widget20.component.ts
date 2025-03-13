import { NgClass, NgStyle } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-cards-widget20",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./cards-widget20.component.html",
  styleUrls: ["./cards-widget20.component.scss"],
  imports: [NgClass, NgStyle]
})
export class CardsWidget20Component implements OnInit {
  @Input() cssClass: string = "";
  @Input() description: string = "";
  @Input() color: string = "";
  @Input() img: string = "";
  constructor() {}

  ngOnInit(): void {}
}
