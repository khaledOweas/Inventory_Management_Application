import { Component, OnInit } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { DropdownMenu1Component } from "../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component";

@Component({
  selector: "app-feeds-widget2",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./feeds-widget2.component.html",
  imports: [KeeniconComponent, DropdownMenu1Component]
})
export class FeedsWidget2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
