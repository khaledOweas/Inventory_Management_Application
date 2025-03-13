import { NgClass } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { InlineSVGModule } from "ng-inline-svg-2";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-base-tables-widget6",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./base-tables-widget6.component.html",
  imports: [NgClass, InlineSVGModule, KeeniconComponent]
})
export class BaseTablesWidget6Component implements OnInit {
  TABS: string[] = ["Month", "Week", "Day"];
  currentTab: string;
  @Input() cssClass: string;

  constructor() {}

  ngOnInit(): void {
    this.currentTab = this.TABS[2];
  }

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }
}
