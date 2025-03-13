import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { InventoryItem } from "../models/InventoryItem";

@Injectable({
  providedIn: "root"
})
export class InventoryService {
  private storageKey = "inventoryData";
  private inventoryData: InventoryItem[] = [];

  private inventorySubject = new BehaviorSubject<InventoryItem[]>([]);
  inventory$ = this.inventorySubject.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const savedData = localStorage.getItem(this.storageKey);
    if (savedData) {
      this.inventoryData = JSON.parse(savedData).map((item: any) => InventoryItem.fromJS(item));
    } else {
      this.inventoryData = [
        InventoryItem.fromJS({
          id: 1,
          name: "Laptop",
          category: "Electronics",
          stockQuantity: 15,
          price: 500,
          lastUpdated: new Date()
        }),
        InventoryItem.fromJS({
          id: 2,
          name: "Mouse",
          category: "Accessories",
          stockQuantity: 25,
          price: 20,
          lastUpdated: new Date()
        })
      ];
      this.saveToStorage();
    }
    this.inventorySubject.next(this.inventoryData);
  }

  private saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.inventoryData));
  }

  loadInventory(): Observable<InventoryItem[]> {
    return of(this.inventoryData);
  }

  getItemById(id: number): Observable<InventoryItem | undefined> {
    const item = this.inventoryData.find((i) => i.id === id);
    return of(item);
  }
  addItem(item: InventoryItem): Observable<InventoryItem> {
    item.id = this.inventoryData.length > 0 ? Math.max(...this.inventoryData.map((i) => i.id!)) + 1 : 1;
    this.inventoryData.push(item);
    this.saveToStorage();
    this.inventorySubject.next(this.inventoryData);
    return of(item);
  }

  updateItem(updatedItem: InventoryItem): Observable<InventoryItem> {
    const index = this.inventoryData.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      this.inventoryData[index] = updatedItem;
      this.saveToStorage();
      this.inventorySubject.next(this.inventoryData);
    }
    return of(updatedItem);
  }

  deleteItem(id: number): Observable<boolean> {
    this.inventoryData = this.inventoryData.filter((item) => item.id !== id);
    this.saveToStorage();
    this.inventorySubject.next(this.inventoryData);
    return of(true);
  }
}
