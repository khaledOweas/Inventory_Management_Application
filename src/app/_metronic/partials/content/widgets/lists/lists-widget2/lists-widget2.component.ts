import { Component } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { DropdownMenu1Component } from "../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component";

@Component({
  selector: "app-lists-widget2",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./lists-widget2.component.html",
  imports: [KeeniconComponent, DropdownMenu1Component]
})
export class ListsWidget2Component {
  constructor() {}
}
