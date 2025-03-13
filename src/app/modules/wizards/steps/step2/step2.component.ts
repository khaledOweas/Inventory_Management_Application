import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ICreateAccount } from "../../create-account.helper";
import { NgClass } from "@angular/common";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-step2",
  standalone: true,
  imports: [NgClass, KeeniconComponent, ReactiveFormsModule],
  templateUrl: "./step2.component.html"
})
export class Step2Component implements OnInit, OnDestroy {
  @Input("updateParentModel") updateParentModel: (part: Partial<ICreateAccount>, isFormValid: boolean) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<ICreateAccount>;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());
  }

  initForm() {
    this.form = this.fb.group({
      accountTeamSize: [this.defaultValues.accountTeamSize, [Validators.required]],
      accountName: [this.defaultValues.accountName, [Validators.required]],
      accountPlan: [this.defaultValues.accountPlan, [Validators.required]]
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !this.form.get("accountName")?.hasError("required");
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
