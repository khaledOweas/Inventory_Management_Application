import { Component } from "@angular/core";
import { Card5Component } from "src/app/_metronic/partials/content/cards/card5/card5.component";

@Component({
  selector: "app-campaigns",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./campaigns.component.html",
  imports: [Card5Component]
})
export class CampaignsComponent {
  constructor() {}
}
