import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "<body[root]>",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
  standalone: true,
  imports: [RouterOutlet, NgStyle]
})
export class AuthComponent {
  today: Date = new Date();
}
