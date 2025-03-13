import { Component, OnInit } from '@angular/core';
import { KeeniconComponent } from 'src/app/_metronic/shared/keenicon/keenicon.component';

@Component({
  selector: 'app-activity-drawer',
  standalone: true, // Generated Stand-Alone Component
  templateUrl: './activity-drawer.component.html',
  imports:[KeeniconComponent]
})
export class ActivityDrawerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
