import { Component, OnInit } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { DropdownMenu2Component } from "../../../../dropdown-menus/dropdown-menu2/dropdown-menu2.component";
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: "app-lists-widget26",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./lists-widget26.component.html",
  styleUrls: ["./lists-widget26.component.scss"],
  imports: [KeeniconComponent, DropdownMenu2Component, NgIf,NgFor]
})
export class ListsWidget26Component implements OnInit {
  rows: Array<{ description: string }>;

  constructor() {}

  ngOnInit(): void {
    this.rows = [
      { description: "Avg. Client Rating" },
      { description: "Instagram Followers" },
      { description: "Google Ads CPC" }
    ];
  }
}
