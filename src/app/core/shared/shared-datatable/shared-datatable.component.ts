import { DatePipe, NgFor, NgIf, NgStyle } from "@angular/common";
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from "@angular/core";
import { MenuItem } from "primeng/api/menuitem";
import { TableModule } from "primeng/table";
import { MultiSelectModule } from "primeng/multiselect";
import { SplitButtonModule } from "primeng/splitbutton";
import { ImageModule } from "primeng/image";

import { FormsModule } from "@angular/forms";
import { SharedDataTableColumn } from "./sharedDatatablesModels";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-shared-datatable",
  templateUrl: "./shared-datatable.component.html",
  standalone: true,
  imports: [
    TableModule,
    MultiSelectModule,
    SplitButtonModule,
    FormsModule,
    ImageModule,
    NgStyle,
    NgIf,
    NgFor,
    KeeniconComponent
  ],
  styleUrls: ["./shared-datatable.component.css"]
})
export class SharedDatatableComponent {
  @Input() cols!: SharedDataTableColumn[];
  @Input() data!: any[];
  @Output() dataChange = new EventEmitter<any>();
  @Input() showPlustCloudeButtons: boolean = false;
  @Input() smallPagination: boolean = true;
  @Input() chooseColomns: boolean = true;
  @Input() filtration: boolean = true;
  @Input() pagination: boolean = true;
  @Input() rowOrder: boolean = false;
  @Input() scrollable: boolean = false;
  @Input() scrollHeight: string = "";
  @Input() searchText: string = "";
  @Input() toolsText: string = "";
  @Input() NoRecordsFound: string = "";

  @Output() plusButtonEvent = new EventEmitter<string>();
  @Output() cloudButtonEvent = new EventEmitter<string>();

  @Input() FirstBtn: boolean = false;
  @Input() SecondBtn: boolean = false;
  @Input() ThirdBtn: boolean = false;

  @Input() classFirstBtn: string = "danger";
  @Input() classSecondBtn: string = "warning";
  @Input() classThirdBtn: string = "info";

  @Input() contentFirstBtn: string = "NULL";
  @Input() contentSecondBtn: string = "NULL";
  @Input() contentThirdBtn: string = "NULL";

  @Output() firstButtonEvent = new EventEmitter<any>();
  @Output() secondButtonEvent = new EventEmitter<any>();
  @Output() thirdButtonEvent = new EventEmitter<any>();

  @Input() selectionModeValue: string = "single";
  @Input() mainButtonForItems: string = "";
  @Input() rowsPageNumbers: number = 10;

  selectedRows: any[] = [];

  @Input() multipleSelectChechBox: boolean = false;
  @Output() selectNewRow = new EventEmitter<any>();
  @Output() unselectRow = new EventEmitter<any>();
  @Output() headerCheckBoxToogle = new EventEmitter<any>();
  @Output() RowReorder = new EventEmitter<any>();

  @Output() selectedAction1 = new EventEmitter<any>();
  @Output() urlAction1 = new EventEmitter<any>();
  lang: string = localStorage.getItem("dir")!;
  @Input() menuForSelectedItems: MenuItem[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    this.lang = localStorage.getItem("dir")!;
    this.toolsText = this.lang == "de" ? "الأدوات" : "Tools";
    this.NoRecordsFound = this.lang == "de" ? "لا يوجد بيانات" : "No Records Found";
    this.searchText = this.lang == "de" ? "بحث" : "Search";
  }

  first = 0;
  rows = 10;
  filterFiledsByColumn: any[] = [];
  selectedColumns: SharedDataTableColumn[] = [];

  ngOnInit() {
    for (let i = 0; i < this.cols.length; i++) {
      const element = this.cols[i];
      if (element.filtered) {
        try {
          this.filterFiledsByColumn.push(element.field);
        } catch (error) {
          // console.log(error);
        }
      }
    }

    this.selectedColumns = this.cols.filter((x) => x.hidden == false);
  }

  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  next() {
    if (this.data.length >= this.first + this.rows) this.first = this.first + this.rows;
    this.cdr.detectChanges();
  }

  prev() {
    if (this.first - this.rows >= 0) this.first = this.first - this.rows;
    this.cdr.detectChanges();
  }

  pageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
    this.cdr.detectChanges();
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    // return this.data ? this.first === (this.data.length - this.rows) : true;
    let dataaaa = this.data ? this.first === this.data.length - this.rows : true;
    return dataaaa;
  }

  isFirstPage(): boolean {
    return this.data ? this.first === 0 : true;
  }

  plusButtonClick() {
    this.plusButtonEvent.emit("Plus Button");
  }
  cloudButtonClick() {
    this.cloudButtonEvent.emit("Cloud Button");
  }

  rowFirstClick(data: any) {
    this.firstButtonEvent.emit(data);
  }

  rowSecondClick(data: any) {
    this.secondButtonEvent.emit(data);
  }

  rowThirdClick(data: any) {
    this.thirdButtonEvent.emit(data);
  }
  onContextMenuSelect(event: any, contextMenu: any) {
    contextMenu.hide();
  }
  getBooleanValue(any: any, any2: any) {
    if (any[any2] === true) {
      return true;
    } else if (typeof any[any2] === typeof 1) {
      if (any[any2] > 0) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  SelectedAction1(): void {
    this.selectedAction1.emit(this.selectedRows);
  }
  onRowSelect(event: any) {
    this.selectNewRow.emit({ event: event, selectedRows: this.selectedRows });
  }
  onRowUnSelect(event: any) {
    this.unselectRow.emit({ event: event, selectedRows: this.selectedRows });
  }
  onHeaderCheckBoxToogle(event: any) {
    this.headerCheckBoxToogle.emit({ event: event.checked, selectedRows: this.selectedRows });
  }

  onRowReorder(event: any) {
    this.RowReorder.emit(event);
  }

  UrlAction1(data: any): void {
    this.urlAction1.emit(data);
  }
  BindDate(data: any, column: SharedDataTableColumn) {
    return new DatePipe("EN").transform(data[column.field], "yyyy-MM-dd");
  }
  BindDateTime(data: any, column: SharedDataTableColumn) {
    return new DatePipe("EN").transform(data[column.field], "yyyy-MM-dd HH:mm a");
  }

  BindImage(data: any, column: SharedDataTableColumn): string {
    if (data[column.field]) {
      // return this.storageUrl + '/' + String(data[column.field]);
      return String(data[column.field]);
    } else {
      return this.defaultImage;
    }
  }
  defaultImage: string = "../assets/logo/png%202.png";
  onImageError(event: any): void {
    event.target.src = this.defaultImage;
  }
  BindData(data: any, column: SharedDataTableColumn, allLine: boolean = false) {
    if (!allLine) {
      if (String(data[column.field]).length > 40) {
        return String(data[column.field]).substring(0, 40) + "....";
      } else {
        return String(data[column.field]) == "null" ? "" : String(data[column.field]);
      }
    } else {
      return String(data[column.field]) == "null" ? "" : String(data[column.field]);
    }
  }

  // End Custom Bind

  GetValue(data: any, column: string) {
    let res: string = "";
    if (column == "visitId") {
      if (data[column] == undefined) {
        res = String(data["docid"]) == "null" ? "" : String(data["docid"]);
        return res;
      }
    }
    res = String(data[column]) == "null" ? "" : String(data[column]);
    if (column == "userFollowUpAR" && res != "") {
    }
    return res;
  }

  GetNumberValue(data: any, column: string): number | null {
    return Number(data[column]) == null ? null : Number(data[column]);
  }

  downloadPDF() {
    var htmlContent = "";

    const tableElements = document.getElementsByTagName("table");
    const tableElement = tableElements[0];

    if (tableElement) {
      htmlContent = tableElement.parentElement?.innerHTML!;
    } else {
      htmlContent = "Data not found";
    }
    var newWindow = window.open("PDFData", "_blank");
    newWindow!.document.open();
    newWindow!.document.write(
      `<html dir="rtl"> <style>
    table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th, td {
    text-align: right;
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
}


th {
    background-color: #f2f2f2;
}
</style> <body direction="rtl" dir="rtl"


    style = "direction: rtl" >` +
        htmlContent +
        "</body></html>"
    );
    newWindow!.document.close();
    setTimeout(function () {
      newWindow!.print();

      newWindow!.close();
    }, 1000);
  }

  htmlContent(ind: string): string {
    switch (ind) {
      case "edit":
        return `<i class="ki-duotone ki-tablet-delete ">
 <span class="path1"></span>
 <span class="path2"></span>
 <span class="path3"></span>
</i> Edit`;
      case "delete":
        return `<i class="ki-duotone ki-tablet-delete ">
 <span class="path1"></span>
 <span class="path2"></span>
 <span class="path3"></span>
</i> Delete`;
    }
    return "";
  }
}
