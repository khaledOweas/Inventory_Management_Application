import { NgIf } from "@angular/common";
import { Component, Injector, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateDirective, TranslatePipe } from "@ngx-translate/core";
import { ToastModule } from "primeng/toast";
import {
  ApplicationRole,
  CreateUserDto,
  IdentityService,
  RoleDtoListBaseResponse,
  UserDtoBaseResponse
} from "../../../services/IdentityService";
import { takeUntil } from "rxjs";
import { MultiSelectModule } from "primeng/multiselect";
import { PasswordModule } from "primeng/password";
import { BaseComponent } from "src/app/core/Components/base/base.component";

@Component({
  selector: "app-user-create",
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    RouterLink,
    RouterLinkActive,
    TranslateDirective,
    NgIf,
    MultiSelectModule,
    TranslatePipe,
    PasswordModule
  ],
  providers: [IdentityService],
  templateUrl: "./user-create.component.html",
  styleUrl: "./user-create.component.css"
})
export class UserCreateComponent extends BaseComponent implements OnInit {
  userForm: FormGroup;
  rolesData?: ApplicationRole[] | undefined;

  constructor(private injector: Injector, private fb: FormBuilder, private service: IdentityService) {
    super(injector);
    this.userForm = this.fb.group(
      {
        userName: ["", Validators.required],
        userNameAr: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        phoneNumber: ["", this.phoneNumberValidator],
        roleNames: [[], Validators.required],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required]
      },
      { validator: this.passwordMatchValidator }
    );
  }
  ngOnInit(): void {
    this.loadAllRoles();
  }

  onSubmit(action: "new" | "redirect") {
    if (this.userForm.valid) {
      const data = this.userForm.value;
      data.roleNames = data.roleNames.map((x: any) => x.name);
      const model: CreateUserDto = new CreateUserDto(data);
      this.service.usersPOST(model).subscribe({
        next: (res: UserDtoBaseResponse) => {
          if (res.isSuccess) {
            this.ct.sendToaster("info", this.tr.get("SHARED.ServerDetails"), res.message);
            switch (action) {
              case "new":
                this.userForm.reset();
                break;
              case "redirect":
                this.router.navigate(["/user-list"]);
                break;
              default:
                break;
            }
          } else {
            res.errors!.forEach((element) => {
              this.ct.sendToaster("error", this.tr.get("SHARED.ServerDetails"), res.message! + element.value!);
            });
          }
        },
        error: () => {}
      });
    } else {
      this.logValidationErrors();
    }
  }

  logValidationErrors() {
    Object.keys(this.userForm.controls).forEach((key) => {
      const controlErrors = this.userForm.get(key)?.errors;
      if (controlErrors) {
        console.error(`Validation errors for ${key}:`, controlErrors);
      }
    });
  }
  onReset() {
    this.userForm.reset();
  }
  phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
    const phoneRegex = /^\d{10}$/;
    const valid = phoneRegex.test(control.value);
    return valid ? null : { invalidPhone: true };
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get("password")?.value;
    const confirmPassword = formGroup.get("confirmPassword")?.value;

    if (password !== confirmPassword) {
      formGroup.get("confirmPassword")?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get("confirmPassword")?.setErrors(null);
    }
  }
  loadAllRoles() {
    this.service
      .rolesGET()
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (res: RoleDtoListBaseResponse) => {
          this.ct.sendToaster("info", this.tr.get("SHARED.ServerDetails"), res.message);
          this.rolesData = res.responseData;
        }
      });
  }
  generateRandomPassword() {
    const randomPassword = this.generateStrongPassword(12); // Generate a 12-character password
    this.userForm.patchValue({
      password: randomPassword,
      confirmPassword: randomPassword
    });
  }

  generateStrongPassword(length: number): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  preventSpaces(event: KeyboardEvent): void {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
}
