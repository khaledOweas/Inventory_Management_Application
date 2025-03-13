import { Component } from "@angular/core";
import { ListsWidget1Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget1/lists-widget1.component";
import { ListsWidget2Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget2/lists-widget2.component";
import { ListsWidget3Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget3/lists-widget3.component";
import { ListsWidget4Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget4/lists-widget4.component";
import { ListsWidget5Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget5/lists-widget5.component";
import { ListsWidget6Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget6/lists-widget6.component";
import { ListsWidget7Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget7/lists-widget7.component";
import { ListsWidget8Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget8/lists-widget8.component";

@Component({
  selector: "app-lists",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./lists.component.html",
  imports: [
    ListsWidget1Component,
    ListsWidget2Component,
    ListsWidget3Component,
    ListsWidget4Component,
    ListsWidget5Component,
    ListsWidget6Component,
    ListsWidget7Component,
    ListsWidget8Component
  ]
})
export class ListsComponent {
  constructor() {}
}
