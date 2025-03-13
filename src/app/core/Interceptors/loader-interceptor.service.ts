import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { MainSpinnerService } from "../services/main-spinner.service";

@Injectable({
  providedIn: "root"
})
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private spinnerService: MainSpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.requestStarted();
    return next.handle(req).pipe(
      finalize(() => {
        this.spinnerService.requestEnded();
      })
    );
  }
}
