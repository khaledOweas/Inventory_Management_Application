import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { InlineSVGModule } from "ng-inline-svg-2";

@Component({
  selector: "app-stats-widget5",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./stats-widget5.component.html",
  imports: [NgClass, NgApexchartsModule, InlineSVGModule]
})
export class StatsWidget5Component {
  @Input() svgIcon = "";
  @Input() iconColor = "";
  @Input() color = "";
  @Input() description = "";
  @Input() title = "";

  constructor() {}
}
