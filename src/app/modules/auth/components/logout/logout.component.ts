import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"],
  standalone: true,
  imports: []
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService) {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
