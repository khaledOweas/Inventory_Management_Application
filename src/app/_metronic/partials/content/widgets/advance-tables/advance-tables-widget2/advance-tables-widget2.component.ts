import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-tables-widget2',
  standalone: true, // Generated Stand-Alone Component
  templateUrl: './advance-tables-widget2.component.html',
})
export class AdvanceTablesWidget2Component implements OnInit {
  currentTab = 'Day';

  constructor() {}

  ngOnInit(): void {}

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }
}
