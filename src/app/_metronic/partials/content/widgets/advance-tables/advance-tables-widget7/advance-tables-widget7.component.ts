import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { InlineSVGModule } from "ng-inline-svg-2";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-advance-tables-widget7",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./advance-tables-widget7.component.html",
  imports: [NgClass, KeeniconComponent, InlineSVGModule]
})
export class AdvanceTablesWidget7Component {
  @Input() cssClass: "";
  currentTab = "Day";

  constructor() {}

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }
}
