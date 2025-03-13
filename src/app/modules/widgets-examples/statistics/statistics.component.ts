import { NgStyle } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { StatsWidget1Component } from "src/app/_metronic/partials/content/widgets/stats/stats-widget1/stats-widget1.component";
import { StatsWidget2Component } from "src/app/_metronic/partials/content/widgets/stats/stats-widget2/stats-widget2.component";
import { StatsWidget3Component } from "src/app/_metronic/partials/content/widgets/stats/stats-widget3/stats-widget3.component";
import { StatsWidget4Component } from "src/app/_metronic/partials/content/widgets/stats/stats-widget4/stats-widget4.component";
import { StatsWidget5Component } from "src/app/_metronic/partials/content/widgets/stats/stats-widget5/stats-widget5.component";
import { StatsWidget6Component } from "src/app/_metronic/partials/content/widgets/stats/stats-widget6/stats-widget6.component";

@Component({
  selector: "app-statistics",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
  imports: [
    StatsWidget1Component,
    StatsWidget1Component,
    StatsWidget2Component,
    StatsWidget3Component,
    StatsWidget4Component,
    StatsWidget5Component,
    StatsWidget6Component,
    NgStyle
  ]
})
export class StatisticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
