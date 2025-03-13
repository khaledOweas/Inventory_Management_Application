import { Component, OnInit } from "@angular/core";
import { DropdownMenu1Component } from "../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-feeds-widget5",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./feeds-widget5.component.html",
  imports: [KeeniconComponent, DropdownMenu1Component]
})
export class FeedsWidget5Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
