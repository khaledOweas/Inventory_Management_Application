import { NgClass, NgIf } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { DropdownMenu1Component } from "../../dropdown-menus/dropdown-menu1/dropdown-menu1.component";

@Component({
  selector: "app-card5",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./card5.component.html",
  imports: [NgClass, KeeniconComponent, DropdownMenu1Component, NgIf]
})
export class Card5Component {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() status: "up" | "down" = "up";
  @Input() statusValue: number;
  @Input() statusDesc: string = "";
  @Input() progress: number = 100;
  @Input() progressType: string = "";
  @HostBinding("class") class = "card h-100";

  constructor() {}
}
