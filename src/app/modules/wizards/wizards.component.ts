import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-wizards",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./wizards.component.html"
})
export class WizardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
