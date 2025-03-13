import { Component } from "@angular/core";
import { ChartsWidget1Component } from "src/app/_metronic/partials/content/widgets/charts/charts-widget1/charts-widget1.component";
import { ChartsWidget2Component } from "src/app/_metronic/partials/content/widgets/charts/charts-widget2/charts-widget2.component";
import { ChartsWidget3Component } from "src/app/_metronic/partials/content/widgets/charts/charts-widget3/charts-widget3.component";
import { ChartsWidget4Component } from "src/app/_metronic/partials/content/widgets/charts/charts-widget4/charts-widget4.component";
import { ChartsWidget5Component } from "src/app/_metronic/partials/content/widgets/charts/charts-widget5/charts-widget5.component";
import { ChartsWidget6Component } from "src/app/_metronic/partials/content/widgets/charts/charts-widget6/charts-widget6.component";
import { ChartsWidget7Component } from "src/app/_metronic/partials/content/widgets/charts/charts-widget7/charts-widget7.component";
import { ChartsWidget8Component } from "src/app/_metronic/partials/content/widgets/charts/charts-widget8/charts-widget8.component";

@Component({
  selector: "app-charts",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./charts.component.html",
  imports: [
    ChartsWidget1Component,
    ChartsWidget2Component,
    ChartsWidget3Component,
    ChartsWidget4Component,
    ChartsWidget5Component,
    ChartsWidget6Component,
    ChartsWidget7Component,
    ChartsWidget8Component
  ]
})
export class ChartsComponent {
  constructor() {}
}
