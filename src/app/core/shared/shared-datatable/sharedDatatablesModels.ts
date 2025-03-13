export class SharedDataTableColumn implements ISharedDataTableColumn {
  id: number = 0;
  filtered: boolean = false;
  sorted: boolean = false;
  field: string = "";
  header: string = "";
  type: string = "";
  boolIconTrue: string = "";
  boolIconFalse: string = "";
  datalabel: boolean = false;
  datalabelConditions: any;
  labelclass: string = "";
  field2: string = "";
  field3: string = "";
  hidden: boolean = false;

  constructor(data?: ISharedDataTableColumn) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.filtered = _data["filtered"];
      this.sorted = _data["sorted"];
      this.datalabelConditions = _data["datalabelConditions"];
      this.datalabel = _data["datalabel"];
      this.field = _data["field"];
      this.field2 = _data["field2"];
      this.field3 = _data["field3"];
      this.header = _data["header"];
      this.labelclass = _data["labelclass"];
      this.type = _data["type"];
      this.boolIconTrue = _data["boolIconTrue"];
      this.boolIconFalse = _data["boolIconFalse"];
      this.hidden = _data["hidden"];
    }
  }

  static fromJS(data: any): SharedDataTableColumn {
    data = typeof data === "object" ? data : {};
    let result = new SharedDataTableColumn();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["id"] = this.id;
    data["filtered"] = this.filtered;
    data["sorted"] = this.sorted;
    data["datalabel"] = this.datalabel;
    data["datalabelConditions"] = this.datalabelConditions;
    data["field"] = this.field;
    data["field2"] = this.field2;
    data["field3"] = this.field3;
    data["header"] = this.header;
    data["labelclass"] = this.labelclass;
    data["type"] = this.type;
    data["boolIconTrue"] = this.boolIconTrue;
    data["boolIconFalse"] = this.boolIconFalse;
    data["hidden"] = this.hidden;

    return data;
  }
}

export interface ISharedDataTableColumn {
  id: number;
  filtered: boolean;
  sorted: boolean;
  field: string;
  header: string;
  type: string;
  datalabel: boolean;
  labelclass: string;
  boolIconTrue: string;
  boolIconFalse: string;
  datalabelConditions: any;
  hidden: boolean;
}
