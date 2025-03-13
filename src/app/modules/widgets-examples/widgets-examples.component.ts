import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-widgets-examples",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./widgets-examples.component.html",
  styleUrls: ["./widgets-examples.component.scss"],
  imports: [RouterOutlet]
})
export class WidgetsExamplesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
