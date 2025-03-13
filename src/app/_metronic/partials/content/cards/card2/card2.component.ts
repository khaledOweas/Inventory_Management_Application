import { Component, Input } from "@angular/core";
import { IconUserModel } from "../icon-user.model";
import { NgClass } from "@angular/common";
import { UserListComponent } from "../user-list/user-list.component";

@Component({
  selector: "app-card2",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./card2.component.html",
  imports: [NgClass, UserListComponent]
})
export class Card2Component {
  @Input() icon: string = "";
  @Input() badgeColor: string = "";
  @Input() status: string = "";
  @Input() statusColor: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() date: string = "";
  @Input() budget: string = "";
  @Input() progress: number = 50;
  @Input() users: Array<IconUserModel> = [];

  constructor() {}
}
