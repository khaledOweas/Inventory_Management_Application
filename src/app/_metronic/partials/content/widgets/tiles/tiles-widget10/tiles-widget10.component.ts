import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-tiles-widget10',
  standalone: true, // Generated Stand-Alone Component
  templateUrl: './tiles-widget10.component.html',
    imports: [NgClass, NgStyle]

})
export class TilesWidget10Component {
  @Input() cssClass = '';
  @Input() widgetHeight = '130px';

  constructor() {}
}
