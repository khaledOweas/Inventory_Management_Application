import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { jwtDecode } from "jwt-decode";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class AuthGuard {
  constructor(private authService: AuthService) {}
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      let token = localStorage.getItem(this.authLocalStorageToken);
      if (token === null) {
        this.authService.logout();
        return false;
      } else {
        console.log("Token found");
        return true;
      }
    } catch (error) {
      localStorage.removeItem(this.authLocalStorageToken);
      this.authService.logout();
      return false;
    }
  }
}
