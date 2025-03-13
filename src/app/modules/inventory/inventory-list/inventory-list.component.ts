import { Component, Injector, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateDirective } from "@ngx-translate/core";
import { ToastModule } from "primeng/toast";
import { takeUntil } from "rxjs";
import { BaseComponent } from "src/app/core/Components/base/base.component";
import { SharedDatatableComponent } from "src/app/core/shared/shared-datatable/shared-datatable.component";
import { SharedDataTableColumn } from "src/app/core/shared/shared-datatable/sharedDatatablesModels";
import { ColumnManager, ListColumnType } from "src/app/data/DataTableColumnData";
import Swal from "sweetalert2";
import { InventoryItem } from "../models/InventoryItem";
import { InventoryService } from "src/app/modules/inventory/services/InventoryService";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-inventory-list",
  standalone: true,
  imports: [ToastModule, RouterLink, RouterLinkActive, TranslateDirective, SharedDatatableComponent, FormsModule],
  templateUrl: "./inventory-list.component.html",
  styleUrl: "./inventory-list.component.scss"
})
export class InventoryListComponent extends BaseComponent implements OnInit {
  Cols!: SharedDataTableColumn[];
  Data: InventoryItem[] | undefined;
  filteredData: InventoryItem[] | undefined;

  nameFilter: string = "";
  stockStatusFilter: string = "";

  constructor(private injector: Injector, private inventoryService: InventoryService) {
    super(injector);

    this.Cols = ColumnManager.getCol(ListColumnType.inventory);
  }

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory() {
    this.inventoryService.inventory$.pipe(takeUntil(this.destroyed$)).subscribe((items) => {
      this.Data = items;
      this.applyFilters();
    });
  }

  applyFilters() {
    if (!this.Data) return;

    this.filteredData = this.Data.filter((item) => {
      const matchesName = item.name?.toLowerCase().includes(this.nameFilter.toLowerCase()) ?? false;

      let matchesStockStatus = true;
      const stockQty = item.stockQuantity ?? 0;
      // we can use enum
      if (this.stockStatusFilter === "Low Stock") {
        matchesStockStatus = stockQty <= 5;
      } else if (this.stockStatusFilter === "In Stock") {
        matchesStockStatus = stockQty > 5;
      }

      return matchesName && matchesStockStatus;
    });
  }

  editInventory(id: number) {
    this.router.navigate(["/inventory/inventory-update/", id]);
  }

  deleteInventory(id: number) {
    Swal.fire({
      title: this.tr.get("DELETE_CONFIRMATION.TITLE"),
      text: this.tr.get("DELETE_CONFIRMATION.TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: this.tr.get("SHARED.Delete"),
      cancelButtonText: this.tr.get("SHARED.Cancel")
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          this.inventoryService
            .deleteItem(id)
            .pipe(takeUntil(this.destroyed$))
            .subscribe({
              next: (res: boolean) => {
                if (res) {
                  this.ct.sendToaster(
                    "info",
                    this.tr.get("SHARED.ServerDetails"),
                    this.tr.get("SHARED.DeletedSuccessfully")
                  );
                } else {
                  this.ct.sendToaster(
                    "error",
                    this.tr.get("SHARED.ServerDetails"),
                    this.tr.get("SHARED.FailedToDelete")
                  );
                }
              },
              error: (error) => {
                Swal.showValidationMessage(`Request failed: ${error}`);
              }
            });
        } catch (error) {
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      }
      return;
    });
  }
}
