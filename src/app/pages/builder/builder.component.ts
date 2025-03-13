import { Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { LayoutService } from "../../_metronic/layout";
import { NgClass, NgIf } from "@angular/common";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

type Tabs = "Sidebar" | "Header" | "Toolbar";

@Component({
  selector: "app-builder",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./builder.component.html",
  imports: [NgClass, FormsModule, KeeniconComponent, NgIf]
})
export class BuilderComponent implements OnInit {
  activeTab: Tabs = "Sidebar";
  model: any;
  @ViewChild("form", { static: true }) form: NgForm;
  configLoading: boolean = false;
  resetLoading: boolean = false;
  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    this.model = this.layout.getLayoutConfig(this.layout.getBaseLayoutTypeFromLocalStorage());
  }

  setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }

  resetPreview(): void {
    this.resetLoading = true;
    this.layout.resetBaseConfig();
  }

  submitPreview(): void {
    this.configLoading = true;
    this.layout.saveBaseConfig(this.model); // it will refresh the page
  }
}
