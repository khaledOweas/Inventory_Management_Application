import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-tiles-widget14",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./tiles-widget14.component.html",
  imports: [NgClass, KeeniconComponent]
})
export class TilesWidget14Component {
  @Input() cssClass = "";
  constructor() {}
}
