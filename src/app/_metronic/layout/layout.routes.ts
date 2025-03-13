import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { AuthGuard } from "src/app/modules/auth/services/auth.guard";

export const LAYOUT_ROUTES: Routes = [
  {
    path: "",

    component: LayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("../../pages/dashboard/dashboard.routes").then((m) => m.DASHBOARD_ROUTES)
      },
      {
        path: "builder",
        loadChildren: () => import("../../pages/builder/builder.routes").then((m) => m.BUILDER_ROUTES)
      },
      {
        path: "crafted/pages/profile",
        loadChildren: () => import("../../modules/profile/profile.routes").then((m) => m.PROFILE_ROUTES)
        // data: { layout: 'light-sidebar' },
      },
      {
        path: "crafted/account",
        loadChildren: () => import("../../modules/account/account.routes").then((m) => m.ACCOUNT_ROUTES)
        // data: { layout: 'dark-header' },
      },
      {
        path: "inventory",
        loadChildren: () => import("../../modules/Routes/inventory.routes").then((m) => m.INVENTORY_ROUTES)
      },
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
      },
      {
        path: "**",
        redirectTo: "error/404"
      }
    ]
  }
];
