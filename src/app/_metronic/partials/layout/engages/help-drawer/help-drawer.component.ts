import { Component, OnInit } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-help-drawer",
  templateUrl: "./help-drawer.component.html",
  standalone: true,
  imports: [KeeniconComponent]
})
export class HelpDrawerComponent implements OnInit {
  appThemeName: string = environment.appThemeName;
  appPurchaseUrl: string = environment.appPurchaseUrl;

  constructor() {}

  ngOnInit(): void {}
}
