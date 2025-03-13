import { KeyValuePipe, NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-explore-main-drawer",
  templateUrl: "./explore-main-drawer.component.html",
  standalone: true,
  imports: [KeeniconComponent, NgIf, NgFor, KeyValuePipe]
})
export class ExploreMainDrawerComponent implements OnInit {
  appThemeName: string = environment.appThemeName;
  appPurchaseUrl: string = environment.appPurchaseUrl;
  appPreviewUrl: string = environment.appPreviewUrl;
  appDemos = environment.appDemos;

  constructor() {}

  ngOnInit(): void {}
}
