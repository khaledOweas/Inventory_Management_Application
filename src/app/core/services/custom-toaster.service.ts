import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomToasterService {
  constructor() {}

  private toaster$ = new BehaviorSubject<any>({});
  toasterListener$ = this.toaster$.asObservable();

  sendToaster(style: "success" | "info" | "warn" | "error" = "info", title: string, message: any, message2: any = "") {
    this.toaster$.next({ style: style, title: title, message: message, message2: message2 });
  }
}
