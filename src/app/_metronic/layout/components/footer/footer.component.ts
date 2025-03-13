import { NgClass, NgIf, NgTemplateOutlet } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  standalone: true,
  imports: [NgClass, NgIf, NgTemplateOutlet]
})
export class FooterComponent {
  @Input() appFooterContainerCSSClass: string = "";

  currentDateStr: string = new Date().getFullYear().toString();
  constructor() {}
}
