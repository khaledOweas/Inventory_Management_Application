import { Component, OnInit } from "@angular/core";
import { InlineSVGModule } from "ng-inline-svg-2";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
@Component({
  selector: "app-tables-widget10",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./tables-widget10.component.html",
  imports: [KeeniconComponent, InlineSVGModule]
})
export class TablesWidget10Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
