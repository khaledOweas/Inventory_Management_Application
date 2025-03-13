import { Component } from "@angular/core";
import { InlineSVGModule } from "ng-inline-svg-2";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { DropdownMenu1Component } from "../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component";

@Component({
  selector: "app-tables-widget1",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./tables-widget1.component.html",
  imports: [KeeniconComponent, InlineSVGModule, DropdownMenu1Component]
})
export class TablesWidget1Component {
  constructor() {}
}
