import { Component, OnInit } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { DropdownMenu1Component } from "../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component";

@Component({
  selector: "app-feeds-widget6",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./feeds-widget6.component.html",
  imports: [KeeniconComponent, DropdownMenu1Component]
})
export class FeedsWidget6Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
