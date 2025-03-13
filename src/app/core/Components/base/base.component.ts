import { Component, Injector, OnDestroy } from "@angular/core";

import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { CustomToasterService } from "../../services/custom-toaster.service";
import { TranslationService } from "../../services/translation.service";

@Component({
  selector: "app-base",
  imports: [],
  standalone: true,
  templateUrl: "./base.component.html",
  styleUrl: "./base.component.css"
})
export class BaseComponent implements OnDestroy {
  destroyed$ = new Subject<void>();

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ct: CustomToasterService;
  tr: TranslationService;
  lang: string = localStorage.getItem("language")!;
  router: Router;
  constructor(injector: Injector) {
    this.ct = injector.get(CustomToasterService);
    this.tr = injector.get(TranslationService);
    this.lang = localStorage.getItem("language")!;
    this.router = injector.get(Router);
  }


}
