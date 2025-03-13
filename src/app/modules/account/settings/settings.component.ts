import { Component } from "@angular/core";
import { ProfileComponent } from "../../profile/profile.component";
import { ProfileDetailsComponent } from "./forms/profile-details/profile-details.component";
import { SignInMethodComponent } from "./forms/sign-in-method/sign-in-method.component";
import { ConnectedAccountsComponent } from "./forms/connected-accounts/connected-accounts.component";
import { EmailPreferencesComponent } from "./forms/email-preferences/email-preferences.component";
import { NotificationsComponent } from "./forms/notifications/notifications.component";
import { DeactivateAccountComponent } from "./forms/deactivate-account/deactivate-account.component";

@Component({
  selector: "app-settings",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./settings.component.html",
  imports: [
    ProfileDetailsComponent,
    SignInMethodComponent,
    ConnectedAccountsComponent,
    EmailPreferencesComponent,
    NotificationsComponent,
    DeactivateAccountComponent
  ]
})
export class SettingsComponent {
  constructor() {}
}
