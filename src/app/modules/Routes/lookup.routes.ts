import { Routes } from "@angular/router";
import { LookupListComponent } from "../lookup/lookup-list/lookup-list.component";
import { LookupCreateComponent } from "../lookup/lookup-create/lookup-create.component";
import { AuthGuard } from "../auth/services/auth.guard";
import { LookupUpdateComponent } from "../lookup/lookup-update/lookup-update.component";

export const LOOKUP_ROUTES: Routes = [
  { path: "lookup-list/:code", canActivate: [AuthGuard], component: LookupListComponent },
  { path: "lookup-create/:code", canActivate: [AuthGuard], component: LookupCreateComponent },
  { path: "lookup-update/:code", canActivate: [AuthGuard], component: LookupUpdateComponent },
];
