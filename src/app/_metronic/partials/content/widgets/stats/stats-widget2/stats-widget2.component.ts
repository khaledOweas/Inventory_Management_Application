import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-widget2',
  standalone: true, // Generated Stand-Alone Component
  templateUrl: './stats-widget2.component.html',
})
export class StatsWidget2Component {
  @Input() title = '';
  @Input() time = '';
  @Input() description = '';
  @Input() avatar = '';

  constructor() {}
}
