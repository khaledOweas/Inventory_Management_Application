import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/services/auth.guard";
import { BranchComponent } from "../core/branchs/branch/branch.component";
import { BranchCreateComponent } from "../core/branchs/branch-create/branch-create.component";
import { BranchUpdateComponent } from "../core/branchs/branch-update/branch-update.component";


export const BRANCH_ROUTES: Routes = [
  { path: "branch-list", canActivate: [AuthGuard], component: BranchComponent },
  { path: "branch-create", canActivate: [AuthGuard], component: BranchCreateComponent },
  { path: "branch-update/:id", canActivate: [AuthGuard], component: BranchUpdateComponent }
];
