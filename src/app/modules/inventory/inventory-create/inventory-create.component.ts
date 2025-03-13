import { NgIf } from "@angular/common";
import { Component, Injector, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateDirective, TranslatePipe } from "@ngx-translate/core";
import { ToastModule } from "primeng/toast";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { BaseComponent } from "src/app/core/Components/base/base.component";
import { InventoryService } from "src/app/modules/inventory/services/InventoryService";
import { Category } from "src/app/modules/inventory/models/Category";
import { InventoryItem } from "../models/InventoryItem";
import { ValidationAlertsComponent } from "src/app/core/Components/validation-alerts/validation-alerts.component";

@Component({
  selector: "app-inventory-create",
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    RouterLink,
    RouterLinkActive,
    TranslateDirective,
    NgIf,
    DropdownModule,
    InputNumberModule,
    TranslatePipe,
    ValidationAlertsComponent
  ],
  providers: [InventoryService],
  templateUrl: "./inventory-create.component.html",
  styleUrl: "./inventory-create.component.scss"
})
export class InventoryCreateComponent extends BaseComponent implements OnInit {
  inventoryForm: FormGroup;
  categories: Category[] = [
    { name: "Electronics", code: "ELEC" },
    { name: "Furniture", code: "FURN" },
    { name: "Office Supplies", code: "OFFICE" }
  ];

  constructor(private injector: Injector, private fb: FormBuilder, private inventoryService: InventoryService) {
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

  ngOnInit(): void {}

  onSubmit(action: "new" | "redirect") {
    if (this.inventoryForm.valid) {
      this.inventoryService.addItem(InventoryItem.fromJS(this.inventoryForm.value)).subscribe({
        next: (res) => {
          if (res) {
            this.ct.sendToaster("success", this.tr.get("SHARED.success"), this.tr.get("INVENTORY.CreatedSuccess"));
            this.handlePostSubmit(action);
          }
        },
        error: (err) => {
          this.ct.sendToaster("error", this.tr.get("SHARED.Error"), err.message);
        }
      });
    } else {
      this.logValidationErrors();
    }
  }

  private handlePostSubmit(action: "new" | "redirect") {
    switch (action) {
      case "new":
        this.inventoryForm.reset();
        break;
      case "redirect":
        this.router.navigate(["/inventory/inventory-list"]);
        break;
    }
  }

  logValidationErrors() {
    Object.keys(this.inventoryForm.controls).forEach((key) => {
      const control = this.inventoryForm.get(key);
      if (control?.errors) {
        console.error(`Validation errors for ${key}:`, control.errors);
      }
    });
  }

  onReset() {
    this.inventoryForm.reset({
      stockQuantity: 0,
      price: 0
    });
  }
}
