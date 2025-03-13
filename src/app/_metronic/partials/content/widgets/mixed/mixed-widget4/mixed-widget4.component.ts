import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { DropdownMenu1Component } from "../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-mixed-widget4",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./mixed-widget4.component.html",
  imports: [NgClass, DropdownMenu1Component, KeeniconComponent]
})
export class MixedWidget4Component {
  @Input() color: string = "";
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() date: string = "";
  @Input() progress: string = "";
  constructor() {}
}
