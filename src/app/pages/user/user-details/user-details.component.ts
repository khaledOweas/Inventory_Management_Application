import { NgClass } from "@angular/common";
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbCollapse } from "@ng-bootstrap/ng-bootstrap";
import { IUserModel, UserService } from "src/app/_fake/services/user-service";

@Component({
  selector: "app-user-details",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
  imports: [NgClass, NgbCollapse]
})
export class UserDetailsComponent implements OnInit, AfterViewInit {
  isCollapsed: boolean;

  user: IUserModel = { id: 0, name: "", email: "" };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.userService.getUser(id).subscribe((res: IUserModel) => {
      this.user = res;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngAfterViewInit(): void {}
}
