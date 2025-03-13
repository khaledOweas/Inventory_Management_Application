export interface IInventoryItem {
  id?: number;
  name?: string | undefined;
  description?: string | undefined;
  category?: string | undefined;
  stockQuantity?: number | undefined;
  price?: number | undefined;
  lastUpdated?: Date | undefined;
}

export class InventoryItem implements IInventoryItem {
  id?: number;
  name?: string | undefined;
  description?: string | undefined;
  category?: string | undefined;
  stockQuantity?: number | undefined;
  price?: number | undefined;
  lastUpdated?: Date | undefined;

  constructor(data?: IInventoryItem) {
    if (data) {
      for (let property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.description = _data["description"];
      this.category = _data["category"];
      this.stockQuantity = _data["stockQuantity"];
      this.price = _data["price"];
      this.lastUpdated = _data["lastUpdated"] ? new Date(_data["lastUpdated"]) : undefined;
    }
  }

  static fromJS(data: any): InventoryItem {
    data = typeof data === "object" ? data : {};
    let result = new InventoryItem();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["description"] = this.description;
    data["category"] = this.category;
    data["stockQuantity"] = this.stockQuantity;
    data["price"] = this.price;
    data["lastUpdated"] = this.lastUpdated ? this.lastUpdated.toISOString() : undefined;
    return data;
  }
}
