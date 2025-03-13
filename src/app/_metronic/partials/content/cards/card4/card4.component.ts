import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card4',
  standalone: true, // Generated Stand-Alone Component
  templateUrl: './card4.component.html',
})
export class Card4Component {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @HostBinding('class') class = 'card h-100';

  constructor() {}
}
