import { NgClass } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { InlineSVGModule } from "ng-inline-svg-2";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-base-tables-widget1",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./base-tables-widget1.component.html",
  imports: [NgClass, KeeniconComponent, InlineSVGModule]
})
export class BaseTablesWidget1Component implements OnInit {
  TABS: string[] = ["Month", "Week", "Day"];
  currentTab: string;
  @Input() cssClass: string;
  @Input() progressWidth = "";

  constructor() {}

  ngOnInit(): void {
    if (!this.progressWidth) {
      this.progressWidth = "min-w-200px";
    }
    this.currentTab = this.TABS[2];
  }

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }
}
