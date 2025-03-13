import { Component } from "@angular/core";
import { Card4Component } from "src/app/_metronic/partials/content/cards/card4/card4.component";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-documents",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./documents.component.html",
  imports: [Card4Component, KeeniconComponent]
})
export class DocumentsComponent {
  constructor() {}
}
