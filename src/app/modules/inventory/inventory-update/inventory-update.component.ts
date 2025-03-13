import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgIf } from "@angular/common";
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { TranslateDirective, TranslatePipe } from "@ngx-translate/core";
import { ToastModule } from "primeng/toast";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { InventoryService } from "src/app/modules/inventory/services/InventoryService";
import { Category } from "src/app/modules/inventory/models/Category";
import { InventoryItem } from "../models/InventoryItem";
import { ValidationAlertsComponent } from "src/app/core/Components/validation-alerts/validation-alerts.component";
import { BaseComponent } from "src/app/core/Components/base/base.component";

@Component({
  selector: "app-inventory-update",
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    RouterLink,
    TranslateDirective,
    NgIf,
    DropdownModule,
    InputNumberModule,
    TranslatePipe,
    ValidationAlertsComponent
  ],
  templateUrl: "./inventory-update.component.html",
  styleUrl: "./inventory-update.component.scss"
})
export class InventoryUpdateComponent extends BaseComponent implements OnInit {
  inventoryForm: FormGroup;
  categories: Category[] = [
    { name: "Electronics", code: "ELEC" },
    { name: "Furniture", code: "FURN" },
    { name: "Office Supplies", code: "OFFICE" }
  ];
  private currentItemId!: number;

  constructor(
    private injector: Injector,
    private fb: FormBuilder,
    private inventoryService: InventoryService,
    private route: ActivatedRoute
  ) {
    super(injector);
    this.inventoryForm = this.fb.group({
      name: ["", Validators.required],
      category: [null, Validators.required],
      stockQuantity: [0, [Validators.required, Validators.min(0)]],
      description: [""],
      price: [0, [Validators.required, Validators.min(0)]],
      lastUpdated: [new Date()]
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.currentItemId = id;

    this.inventoryService.getItemById(id).subscribe((item) => {
      if (item) {
        this.inventoryForm.patchValue({
          name: item.name,
          category: item.category,
          stockQuantity: item.stockQuantity,
          description: item.description,
          price: item.price,
          lastUpdated: item.lastUpdated
        });
      } else {
        this.router.navigate(["/inventory/inventory-list"]);
      }
    });
  }

  onSubmit(): void {
    if (this.inventoryForm.valid) {
      const formValue = this.inventoryForm.value;
      formValue.lastUpdated = new Date();
      const updatedItem = InventoryItem.fromJS({ ...formValue, id: this.currentItemId });

      this.inventoryService.updateItem(updatedItem).subscribe({
        next: () => {
          this.ct.sendToaster("success", this.tr.get("SHARED.success"), this.tr.get("INVENTORY.UpdatedSuccess"));
          this.router.navigate(["/inventory/inventory-list"]);
        },
        error: (err) => {
          this.ct.sendToaster("error", this.tr.get("SHARED.Error"), err.message);
        }
      });
    } else {
      this.logValidationErrors();
    }
  }

  private logValidationErrors(): void {
    Object.keys(this.inventoryForm.controls).forEach((key) => {
      const control = this.inventoryForm.get(key);
      if (control?.errors) {
        console.error(`Validation errors for ${key}:`, control.errors);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(["/inventory/inventory-list"]);
  }
}
