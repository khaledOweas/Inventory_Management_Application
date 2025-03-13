import { Component, Input } from '@angular/core';
import { DropdownMenu1Component } from '../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component';
import { KeeniconComponent } from 'src/app/_metronic/shared/keenicon/keenicon.component';

@Component({
  selector: 'app-lists-widget8',
  standalone: true, // Generated Stand-Alone Component
  templateUrl: './lists-widget8.component.html',
    imports: [KeeniconComponent, DropdownMenu1Component]

})
export class ListsWidget8Component {
  @Input() cssClass = '';
  constructor() {}
}
