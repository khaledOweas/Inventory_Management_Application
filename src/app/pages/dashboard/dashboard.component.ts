import { Component, ViewChild } from "@angular/core";
import { CardsWidget20Component } from "src/app/_metronic/partials/content/widgets/_new/cards/cards-widget20/cards-widget20.component";
import { CardsWidget7Component } from "src/app/_metronic/partials/content/widgets/_new/cards/cards-widget7/cards-widget7.component";
import { CardsWidget17Component } from "src/app/_metronic/partials/content/widgets/_new/cards/cards-widget17/cards-widget17.component";
import { ListsWidget26Component } from "src/app/_metronic/partials/content/widgets/_new/lists/lists-widget26/lists-widget26.component";
import { EngageWidget10Component } from "src/app/_metronic/partials/content/widgets/_new/engage/engage-widget10/engage-widget10.component";
import { NewChartsWidget8Component } from "src/app/_metronic/partials/content/widgets/_new/charts/new-charts-widget8/new-charts-widget8.component";
import { CardsWidget18Component } from "src/app/_metronic/partials/content/widgets/_new/cards/cards-widget18/cards-widget18.component";
import { ListsWidget3Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget3/lists-widget3.component";
import { TablesWidget10Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget10/tables-widget10.component";
import { ListsWidget2Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget2/lists-widget2.component";
import { ListsWidget6Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget6/lists-widget6.component";
import { ListsWidget4Component } from "src/app/_metronic/partials/content/widgets/lists/lists-widget4/lists-widget4.component";
import { MixedWidget8Component } from "src/app/_metronic/partials/content/widgets/mixed/mixed-widget8/mixed-widget8.component";
import { TablesWidget5Component } from "src/app/_metronic/partials/content/widgets/tables/tables-widget5/tables-widget5.component";
import { ModalConfig } from "src/app/_metronic/partials/layout/modals/modal.config";
import { ModalComponent } from "src/app/_metronic/partials/layout/modals/modal/modal.component";

@Component({
  selector: "app-dashboard",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  imports: [
    CardsWidget20Component,
    CardsWidget7Component,
    CardsWidget17Component,
    ListsWidget26Component,
    EngageWidget10Component,
    NewChartsWidget8Component,
    CardsWidget18Component,
    ListsWidget3Component,
    TablesWidget10Component,
    ListsWidget2Component,
    ListsWidget6Component,
    ListsWidget4Component,
    MixedWidget8Component,
    TablesWidget5Component
  ]
})
export class DashboardComponent {
  modalConfig: ModalConfig = {
    modalTitle: "Modal title",
    dismissButtonLabel: "Submit",
    closeButtonLabel: "Cancel"
  };
  @ViewChild("modal") private modalComponent: ModalComponent;
  constructor() {}

  async openModal() {
    return await this.modalComponent.open();
  }
}
