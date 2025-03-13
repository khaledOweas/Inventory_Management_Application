import { Component, OnInit } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { DropdownMenu2Component } from "../../../dropdown-menus/dropdown-menu2/dropdown-menu2.component";

@Component({
  selector: "app-feeds-widget3",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./feeds-widget3.component.html",
  imports: [KeeniconComponent, DropdownMenu2Component]
})
export class FeedsWidget3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
