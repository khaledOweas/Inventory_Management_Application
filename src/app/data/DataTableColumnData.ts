import { SharedDataTableColumn } from "src/app/core/shared/shared-datatable/sharedDatatablesModels";
import { TranslationService } from "../core/services/translation.service";

export enum ListColumnType {
  inventory = "inventory"
}

export class ColumnManager {
  private static tr: TranslationService | null = null;

  public static setTranslationService(translationService: TranslationService): void {
    ColumnManager.tr! = translationService;
  }

  public static getCol(type: ListColumnType): SharedDataTableColumn[] {
    switch (type) {
      case ListColumnType.inventory:
        return this.getInventoryColumns();

      default:
        return [];
    }
  }

  private static getInventoryColumns(): SharedDataTableColumn[] {
    return [
      SharedDataTableColumn.fromJS({
        id: 1,
        sorted: true,
        filtered: true,
        hidden: true,
        field: "id",
        header: ColumnManager.tr!.get("SHARED.Id"),
        type: "text"
      }),
      SharedDataTableColumn.fromJS({
        id: 2,
        sorted: true,
        filtered: true,
        hidden: false,
        field: "name",
        header: ColumnManager.tr!.get("INVENTORY.Name"),
        type: "text"
      }),

      SharedDataTableColumn.fromJS({
        id: 3,
        sorted: true,
        filtered: true,
        hidden: false,
        field: "category",
        header: ColumnManager.tr!.get("INVENTORY.Category"),
        type: "text"
      }),

      SharedDataTableColumn.fromJS({
        id: 5,
        sorted: true,
        filtered: true,
        hidden: false,
        field: "stockQuantity",
        header: ColumnManager.tr!.get("INVENTORY.StockQuantity"),
        type: "text"
      }),

      SharedDataTableColumn.fromJS({
        id: 6,
        sorted: true,
        filtered: true,
        hidden: false,
        field: "price",
        header: ColumnManager.tr!.get("INVENTORY.Price"),
        type: "text"
      }),
      SharedDataTableColumn.fromJS({
        id: 7,
        sorted: true,
        filtered: true,
        hidden: false,
        field: "lastUpdated",
        header: ColumnManager.tr!.get("INVENTORY.lastUpdated"),
        type: "datetime"
      })
    ];
  }
}
