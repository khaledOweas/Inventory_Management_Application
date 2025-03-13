import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TranslationModule } from "src/app/modules/i18n";

@Component({
  selector: "app-validation-alerts",
  standalone: true,
  imports: [TranslationModule],
  templateUrl: "./validation-alerts.component.html",
  styleUrl: "./validation-alerts.component.scss"
})
export class ValidationAlertsComponent {
  @Input() parentForm: FormGroup;
  @Input() translateKey: string = "";

  objectKeys(obj: any): string[] | null {
    if (obj != null) {
      return Object.keys(obj);
    } else {
      return null;
    }
  }
  concatString(str1: string, str2: string): string {
    return str1 + this.capitalizeFirstLetter(str2);
  }
  capitalizeFirstLetter(str: string): string {
    if (!str) return str; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
