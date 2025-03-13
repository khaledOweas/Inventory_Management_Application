import { Component } from '@angular/core';

@Component({
  selector: 'app-deactivate-account',
  standalone: true, // Generated Stand-Alone Component
  templateUrl: './deactivate-account.component.html',
})
export class DeactivateAccountComponent {
  constructor() {}

  saveSettings() {
    alert('Account has been successfully deleted!');
  }
}
