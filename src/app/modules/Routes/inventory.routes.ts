import { Routes } from "@angular/router";
import { InventoryListComponent } from "../inventory/inventory-list/inventory-list.component";
import { InventoryCreateComponent } from "../inventory/inventory-create/inventory-create.component";
import { InventoryUpdateComponent } from "../inventory/inventory-update/inventory-update.component";
import { AuthGuard } from "../auth/services/auth.guard";

export const INVENTORY_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "/inventory-list",
    pathMatch: "full"
  },
  { path: "inventory-list", canActivate: [], component: InventoryListComponent },
  { path: "inventory-create", canActivate: [AuthGuard], component: InventoryCreateComponent },
  { path: "inventory-update/:id", canActivate: [AuthGuard], component: InventoryUpdateComponent }
];
