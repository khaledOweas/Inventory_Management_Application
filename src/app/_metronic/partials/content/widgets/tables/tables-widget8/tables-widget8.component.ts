import { Component, OnInit } from "@angular/core";
import { NgClass } from "@angular/common";
import { InlineSVGModule } from "ng-inline-svg-2";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
type Tabs = "kt_table_widget_8_tab_1" | "kt_table_widget_8_tab_2" | "kt_table_widget_8_tab_3";

@Component({
  selector: "app-tables-widget8",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./tables-widget8.component.html",
  imports: [NgClass, KeeniconComponent, InlineSVGModule]
})
export class TablesWidget8Component implements OnInit {
  constructor() {}

  activeTab: Tabs = "kt_table_widget_8_tab_1";

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? "show active" : "";
  }

  ngOnInit(): void {}
}
