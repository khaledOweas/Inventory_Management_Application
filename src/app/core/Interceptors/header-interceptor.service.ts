import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (typeof localStorage != "undefined") {
      const modifiedRequest = req.clone({
        setHeaders: {
          Authorization: "Bearer " + localStorage.getItem("token") || ""
        }
      });
      return next.handle(modifiedRequest);
    }
    return next.handle(req);
  }
}
