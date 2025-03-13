import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-sidebar-menu",
  templateUrl: "./sidebar-menu.component.html",
  styleUrls: ["./sidebar-menu.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class SidebarMenuComponent implements OnInit {
  currentRoute: string = "";
  menuObj: any[] = [];
  lang: string = "en";
  username: string = "";

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem("language") || "";
    this.initializeMenu();
  }

  initializeMenu(): void {
    this.menuObj = [
      {
        PageNameDe: "Inventory",
        PageNameEng: "Inventory",
        PageUrl: "/inventory",
        PageType: "Accordion",
        Icon: ` <i class="ki-duotone ki-element-11 fs-2">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                </i>`,
        Children: [
          {
            PageNameDe: "Inventory",
            PageNameEng: "Inventory",
            PageUrl: "/inventory/inventory-list"
          }
        ]
      }
    ];
  }

  checkActiveChildren(item: any): boolean {
    if (item.Children) {
      return item.Children.some((child: any) => this.currentRoute === child.PageUrl);
    }
    return false;
  }

  getUserName(): void {
    if (typeof localStorage !== "undefined") {
      const user = localStorage.getItem("user");
      if (user) {
        this.username = JSON.parse(user).name;
      }
    }
  }
}
