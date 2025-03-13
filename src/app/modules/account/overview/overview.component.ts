import { Component, OnInit } from "@angular/core";
import { ChartsWidget1Component } from "src/app/_metronic/partials/content/widgets/charts/charts-widget1/charts-widget1.component";
import { ListsWidget5Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget5/lists-widget5.component";
import { TablesWidget1Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget1/tables-widget1.component";
import { TablesWidget5Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget5/tables-widget5.component";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-overview",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./overview.component.html",
  imports: [
    ChartsWidget1Component,
    TablesWidget1Component,
    TablesWidget5Component,
    ListsWidget5Component,
    KeeniconComponent
  ]
})
export class OverviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
