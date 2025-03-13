import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { InlineSVGModule } from "ng-inline-svg-2";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { DropdownMenu1Component } from "../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component";

@Component({
  selector: "app-tables-widget2",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./tables-widget2.component.html",
  imports: [KeeniconComponent, InlineSVGModule, DropdownMenu1Component]
})
export class TablesWidget2Component {
  constructor() {}
}
