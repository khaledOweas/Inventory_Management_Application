import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { InlineSVGModule } from "ng-inline-svg-2";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-advance-tables-widget1",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./advance-tables-widget1.component.html",
  imports: [InlineSVGModule, KeeniconComponent, NgClass]
})
export class AdvanceTablesWidget1Component {
  @Input() cssClass: "";
  constructor() {}
}
