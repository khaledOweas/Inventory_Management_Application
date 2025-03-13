import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { DropdownMenu1Component } from "src/app/_metronic/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-profile",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./profile.component.html",
  imports: [KeeniconComponent, DropdownMenu1Component, RouterOutlet, RouterLink]
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
