import { NgClass, NgFor, NgIf, NgStyle } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-cards-widget18",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./cards-widget18.component.html",
  styleUrls: ["./cards-widget18.component.scss"],
  imports: [NgStyle, NgClass, KeeniconComponent, NgIf,NgFor]
})
export class CardsWidget18Component implements OnInit {
  @Input() cssClass: string = "";
  @Input() image: string = "";

  cards: Array<{
    name: string;
    src?: string;
    initials?: string;
    state?: string;
  }> = [];

  constructor() {
    this.cards = [
      { name: "Melody Macy", src: "./assets/media/avatars/300-2.jpg" },
      { name: "Michael Eberon", src: "./assets/media/avatars/300-3.jpg" },
      { name: "Susan Redwood", initials: "S", state: "primary" }
    ];
  }

  ngOnInit(): void {}
}
