import { Component, Input, OnInit } from "@angular/core";
import { IconUserModel } from "../icon-user.model";
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-user-list",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
  imports: [NgbTooltip, NgIf]
})
export class UserListComponent implements OnInit {
  @Input() users: Array<IconUserModel> = [];

  constructor() {}

  ngOnInit(): void {}
}
