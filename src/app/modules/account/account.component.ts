import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DropdownMenu1Component } from "src/app/_metronic/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-account",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./account.component.html",
  imports: [RouterOutlet, KeeniconComponent, DropdownMenu1Component]
})
export class AccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
