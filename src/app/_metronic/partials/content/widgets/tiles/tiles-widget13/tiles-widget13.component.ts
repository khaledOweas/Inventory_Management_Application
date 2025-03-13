import { NgClass, NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-tiles-widget13",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./tiles-widget13.component.html",
  imports: [NgClass, NgStyle]
})
export class TilesWidget13Component {
  @Input() cssClass = "";
  @Input() widgetHeight = "225px";

  constructor() {}
}
