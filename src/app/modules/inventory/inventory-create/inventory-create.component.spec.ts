import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { InventoryCreateComponent } from "./inventory-create.component";
import { of } from "rxjs";
import { InventoryService } from "../services/InventoryService";

describe("InventoryCreateComponent - Form Validation", () => {
  let component: InventoryCreateComponent;
  let fixture: ComponentFixture<InventoryCreateComponent>;
  let inventoryService: jasmine.SpyObj<InventoryService>;

  beforeEach(async () => {
    const inventoryServiceSpy = jasmine.createSpyObj("InventoryService", ["addItem"]);

    await TestBed.configureTestingModule({
      declarations: [InventoryCreateComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: InventoryService, useValue: inventoryServiceSpy }, FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryCreateComponent);
    component = fixture.componentInstance;
    inventoryService = TestBed.inject(InventoryService) as jasmine.SpyObj<InventoryService>;
    fixture.detectChanges();
  });

  it("should not submit the form if it is invalid", () => {
    component.inventoryForm.patchValue({
      name: "", // Required field is empty
      category: null, // Required field is null
      stockQuantity: -1, // Invalid (min value is 0)
      price: -1 // Invalid (min value is 0)
    });

    // Trigger form submission
    component.onSubmit("new");

    expect(inventoryService.addItem).not.toHaveBeenCalled();
  });

  it("should submit the form if it is valid", () => {
    const mockResponse = { id: 1, name: "Test Item" };
    inventoryService.addItem.and.returnValue(of(mockResponse));

    component.inventoryForm.patchValue({
      name: "Test Item",
      category: { name: "Electronics", code: "ELEC" },
      stockQuantity: 10,
      price: 100
    });

    component.onSubmit("new");

    expect(inventoryService.addItem).toHaveBeenCalled();
  });
});
