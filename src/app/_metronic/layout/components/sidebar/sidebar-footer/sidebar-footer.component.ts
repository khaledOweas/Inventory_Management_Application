import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../../../environments/environment";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";

@Component({
  selector: "app-sidebar-footer",
  templateUrl: "./sidebar-footer.component.html",
  styleUrls: ["./sidebar-footer.component.scss"],
  standalone: true,
  imports: [KeeniconComponent]
})
export class SidebarFooterComponent implements OnInit {
  appPreviewChangelogUrl: string = environment.appPreviewChangelogUrl;

  constructor() {}

  ngOnInit(): void {}
}
