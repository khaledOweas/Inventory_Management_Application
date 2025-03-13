import { Component, OnInit } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { ChatInnerComponent } from "../../../content/chat-inner/chat-inner.component";

@Component({
  selector: "app-messenger-drawer",
  templateUrl: "./messenger-drawer.component.html",
  standalone: true,
  imports: [KeeniconComponent, ChatInnerComponent]
})
export class MessengerDrawerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
