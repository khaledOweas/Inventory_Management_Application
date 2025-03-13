import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { InlineSVGModule } from "ng-inline-svg-2";
type Tabs = "kt_table_widget_4_tab_1" | "kt_table_widget_4_tab_2" | "kt_table_widget_4_tab_3";

@Component({
  selector: "app-tables-widget4",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./tables-widget4.component.html",
  imports: [NgClass, InlineSVGModule]
})
export class TablesWidget4Component {
  activeTab: Tabs = "kt_table_widget_4_tab_1";

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? "show active" : "";
  }

  constructor() {}
}
