import { Routes } from "@angular/router";
import { AuthGuard } from "./modules/auth/services/auth.guard";

export const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.routes").then((m) => m.LOGIN_ROUTES)
  },
  {
    path: "error",
    loadChildren: () => import("./modules/errors/error.routes").then((m) => m.ERROR_ROUTES)
  },
  {
    path: "",
    canActivate: [AuthGuard],
    loadChildren: () => import("./_metronic/layout/layout.routes").then((m) => m.LAYOUT_ROUTES)
  },
  { path: "**", redirectTo: "error/404" }
];
