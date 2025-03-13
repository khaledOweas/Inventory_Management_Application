import { Component, OnInit } from "@angular/core";
import { TablesWidget1Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget1/tables-widget1.component";
import { TablesWidget10Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget10/tables-widget10.component";
import { TablesWidget11Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget11/tables-widget11.component";
import { TablesWidget12Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget12/tables-widget12.component";
import { TablesWidget13Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget13/tables-widget13.component";
import { TablesWidget2Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget2/tables-widget2.component";
import { TablesWidget3Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget3/tables-widget3.component";
import { TablesWidget4Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget4/tables-widget4.component";
import { TablesWidget5Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget5/tables-widget5.component";
import { TablesWidget6Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget6/tables-widget6.component";
import { TablesWidget7Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget7/tables-widget7.component";
import { TablesWidget8Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget8/tables-widget8.component";
import { TablesWidget9Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget9/tables-widget9.component";

@Component({
  selector: "app-tables",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./tables.component.html",
  imports: [
    TablesWidget1Component,
    TablesWidget2Component,
    TablesWidget3Component,
    TablesWidget4Component,
    TablesWidget5Component,
    TablesWidget6Component,
    TablesWidget7Component,
    TablesWidget8Component,
    TablesWidget9Component,
    TablesWidget10Component,
    TablesWidget11Component,
    TablesWidget12Component,
    TablesWidget13Component
  ]
})
export class TablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
