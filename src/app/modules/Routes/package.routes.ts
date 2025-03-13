import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/services/auth.guard";
import { PackageListComponent } from "../core/package/package-list/package-list.component";
import { PackageCreateComponent } from "../core/package/package-create/package-create.component";
import { PackageUpdateComponent } from "../core/package/package-update/package-update.component";

export const PACKAGE_ROUTES: Routes = [
  { path: "package-list", canActivate: [AuthGuard], component: PackageListComponent },
  { path: "package-create", canActivate: [AuthGuard], component: PackageCreateComponent },
  { path: "package-update/:id", canActivate: [AuthGuard], component: PackageUpdateComponent }
];
