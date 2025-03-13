import { NgClass, NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-tiles-widget3",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./tiles-widget3.component.html",
  imports: [NgClass, NgStyle]
})
export class TilesWidget3Component {
  @Input() cssClass = "";
  @Input() widgetHeight = "130px";

  constructor() {}
}
