import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/services/auth.guard";
import { PricingCategoriesListComponent } from "../core/pricing-categories/pricing-categories-list/pricing-categories-list.component";
import { PricingCategoryCreateComponent } from "../core/pricing-categories/pricing-category-create/pricing-category-create.component";
import { PricingCategoryUpdateComponent } from "../core/pricing-categories/pricing-category-update/pricing-category-update.component";

export const PRICING_CATEGORY_ROUTES: Routes = [
  { path: "pricing-category-list", canActivate: [AuthGuard], component: PricingCategoriesListComponent },
  { path: "pricing-category-create", canActivate: [AuthGuard], component: PricingCategoryCreateComponent },
  { path: "pricing-category-update/:id", canActivate: [AuthGuard], component: PricingCategoryUpdateComponent }
];
