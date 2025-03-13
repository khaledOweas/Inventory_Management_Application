import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mixed-widget5',
  standalone: true, // Generated Stand-Alone Component
  templateUrl: './mixed-widget5.component.html',
})
export class MixedWidget5Component {
  @Input() color: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() time: string = '';
  @Input() description: string = '';
  constructor() {}
}
