import { Component, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { ICreateAccount, inits } from "../create-account.helper";
import { Step1Component } from "../steps/step1/step1.component";
import { Step2Component } from "../steps/step2/step2.component";
import { Step3Component } from "../steps/step3/step3.component";
import { Step4Component } from "../steps/step4/step4.component";
import { Step5Component } from "../steps/step5/step5.component";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { NgClass, NgIf } from "@angular/common";

@Component({
  selector: "app-vertical",
  standalone: true,
  imports: [
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    KeeniconComponent,
    NgIf,
    NgClass
  ],
  templateUrl: "./vertical.component.html"
})
export class VerticalComponent implements OnInit, OnDestroy {
  formsCount = 5;
  account$: BehaviorSubject<ICreateAccount> = new BehaviorSubject<ICreateAccount>(inits);
  currentStep$: BehaviorSubject<number> = new BehaviorSubject(1);
  isCurrentFormValid$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private unsubscribe: Subscription[] = [];

  constructor() {}

  ngOnInit(): void {}

  updateAccount = (part: Partial<ICreateAccount>, isFormValid: boolean) => {
    const currentAccount = this.account$.value;
    const updatedAccount = { ...currentAccount, ...part };
    this.account$.next(updatedAccount);
    this.isCurrentFormValid$.next(isFormValid);
  };

  nextStep() {
    const nextStep = this.currentStep$.value + 1;
    if (nextStep > this.formsCount) {
      return;
    }
    this.currentStep$.next(nextStep);
  }

  prevStep() {
    const prevStep = this.currentStep$.value - 1;
    if (prevStep === 0) {
      return;
    }
    this.currentStep$.next(prevStep);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
