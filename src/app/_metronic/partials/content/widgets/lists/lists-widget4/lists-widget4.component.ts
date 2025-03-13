import { Component, Input } from '@angular/core';
import { DropdownMenu1Component } from '../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component';
import { KeeniconComponent } from 'src/app/_metronic/shared/keenicon/keenicon.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-lists-widget4',
  standalone: true, // Generated Stand-Alone Component
  templateUrl: './lists-widget4.component.html',
    imports: [KeeniconComponent, DropdownMenu1Component,NgIf]
})
export class ListsWidget4Component {
  @Input() items: number = 6;
  constructor() {}
}
