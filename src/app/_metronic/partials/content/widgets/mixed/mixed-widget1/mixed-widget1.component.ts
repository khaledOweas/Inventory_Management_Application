import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { KeeniconComponent } from 'src/app/_metronic/shared/keenicon/keenicon.component';
import { DropdownMenu1Component } from '../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component';

@Component({
  selector: 'app-mixed-widget1',
  standalone: true, // Generated Stand-Alone Component
  templateUrl: './mixed-widget1.component.html',
  imports:[NgClass,KeeniconComponent,DropdownMenu1Component]
})
export class MixedWidget1Component {
  @Input() color: string = '';
  constructor() {}
}
