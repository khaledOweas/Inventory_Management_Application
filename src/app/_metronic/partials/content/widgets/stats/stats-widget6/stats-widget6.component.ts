import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-stats-widget6",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./stats-widget6.component.html",
  imports: [NgClass]
})
export class StatsWidget6Component {
  @Input() progress = "";
  @Input() color = "";
  @Input() description = "";
  @Input() title = "";

  constructor() {}
}
