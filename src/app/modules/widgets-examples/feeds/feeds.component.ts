import { Component, OnInit } from '@angular/core';
import { FeedsWidget2Component } from 'src/app/_metronic/partials/content/widgets/feeds/feeds-widget2/feeds-widget2.component';
import { FeedsWidget3Component } from 'src/app/_metronic/partials/content/widgets/feeds/feeds-widget3/feeds-widget3.component';
import { FeedsWidget4Component } from 'src/app/_metronic/partials/content/widgets/feeds/feeds-widget4/feeds-widget4.component';
import { FeedsWidget5Component } from 'src/app/_metronic/partials/content/widgets/feeds/feeds-widget5/feeds-widget5.component';
import { FeedsWidget6Component } from 'src/app/_metronic/partials/content/widgets/feeds/feeds-widget6/feeds-widget6.component';

@Component({
  selector: 'app-feeds',
  standalone: true, // Generated Stand-Alone Component
  templateUrl: './feeds.component.html',
  imports:[FeedsWidget2Component,
    FeedsWidget3Component,
    FeedsWidget4Component,
    FeedsWidget5Component,
    FeedsWidget6Component,
  ]
})
export class FeedsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
