import { NgClass, NgIf } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-card3",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./card3.component.html",
  imports: [NgClass, NgIf, KeeniconComponent]
})
export class Card3Component {
  @Input() color: string = "";
  @Input() avatar: string = "";
  @Input() online: boolean = false;
  @Input() name: string = "";
  @Input() job: string = "";
  @Input() avgEarnings: string = "";
  @Input() totalEarnings: string = "";
  @HostBinding("class") class = "card";

  constructor() {}
}
