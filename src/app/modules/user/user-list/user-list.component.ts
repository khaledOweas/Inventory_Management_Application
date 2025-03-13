import { Component, OnInit, Injector } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateDirective } from "@ngx-translate/core";
import { ToastModule } from "primeng/toast";
import { takeUntil } from "rxjs";
import { BaseComponent } from "src/app/core/Components/base/base.component";
import { SharedDatatableComponent } from "src/app/core/shared/shared-datatable/shared-datatable.component";
import { SharedDataTableColumn } from "src/app/core/shared/shared-datatable/sharedDatatablesModels";
import { ColumnManager, ListColumnType } from "src/app/data/DataTableColumnData";
import { BooleanBaseResponse, IdentityService, UserDto, UserDtoListBaseResponse } from "src/app/services/IdentityService";
 import Swal from "sweetalert2";

@Component({
  selector: "app-user-list",
  standalone: true,
  imports: [ToastModule, RouterLink, RouterLinkActive, TranslateDirective, SharedDatatableComponent],
  providers: [IdentityService],
  templateUrl: "./user-list.component.html",
  styleUrl: "./user-list.component.css"
})
export class UserListComponent extends BaseComponent implements OnInit {
  Cols!: SharedDataTableColumn[];
  Data: UserDto[] | undefined;

  constructor(private injector: Injector, private service: IdentityService) {
    super(injector);



  }
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.service
      .usersGET()
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (res: UserDtoListBaseResponse) => {
          this.ct.sendToaster("info", this.tr.get("SHARED.ServerDetails"), res.message);
          this.Data = res.responseData;
        }
      });
  }

  editUser(id: number) {
    this.router.navigate(["/user/user-update/", id]);
  }
  deleteUser(id: number) {
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
          this.service.usersDELETE(id).subscribe({
            next: (res: BooleanBaseResponse) => {
              if (res.isSuccess) {
                this.ct.sendToaster("info", this.tr.get("SHARED.ServerDetails"), res.message);
              } else {
                res.errors!.forEach((element) => {
                  this.ct.sendToaster("error", this.tr.get("SHARED.ServerDetails"), res.message! + element.value!);
                });
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
