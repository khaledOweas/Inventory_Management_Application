import { Component } from "@angular/core";
import { Card3Component } from "src/app/_metronic/partials/content/cards/card3/card3.component";

@Component({
  selector: "app-connections",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./connections.component.html",
  imports: [Card3Component]
})
export class ConnectionsComponent {
  constructor() {}
}
