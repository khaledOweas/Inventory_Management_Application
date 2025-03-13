import { Component, Injector, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { ActivatedRoute, RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateDirective, TranslatePipe } from "@ngx-translate/core";
import { ToastModule } from "primeng/toast";
import {
  ApplicationRole,

  IdentityService,
  RoleDto,
  RoleDtoListBaseResponse,
  UpdateUserDto,
  UserDtoBaseResponse
} from "../../../services/IdentityService";
import { takeUntil } from "rxjs";
import { MultiSelectModule } from "primeng/multiselect";
import { PasswordModule } from "primeng/password";
import { NgIf } from "@angular/common";
import { BaseComponent } from "src/app/core/Components/base/base.component";

@Component({
  selector: "app-user-update",
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
  templateUrl: "./user-update.component.html",
  styleUrl: "./user-update.component.css"
})
export class UserUpdateComponent extends BaseComponent implements OnInit {
  userForm: FormGroup;
  rolesData?: ApplicationRole[] | undefined;
  userId: number;

  constructor(
    private injector: Injector,
    private fb: FormBuilder,
    private service: IdentityService,
    private route: ActivatedRoute
  ) {
    super(injector);
    this.userForm = this.fb.group({
      id: [null],
      userName: ["", Validators.required],
      userNameAr: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", this.phoneNumberValidator],
      roleNames: [[], Validators.required]
    });
    this.userId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.loadAllRoles();
    this.loadUserData();
  }

  loadUserData() {
    this.service.usersGET2(this.userId).subscribe({
      next: (res: UserDtoBaseResponse) => {
        if (res.isSuccess) {
          this.userForm.patchValue({
            id: res.responseData!.id,
            userName: res.responseData!.userName,
            userNameAr: res.responseData!.userNameAr,
            email: res.responseData!.email,
            phoneNumber: res.responseData!.phoneNumber,
            roleNames: res.responseData!.roles?.map((r) => r.name)
          });
        } else {
          this.ct.sendToaster("error", this.tr.get("SHARED.ServerDetails"), res.message!);
        }
      },
      error: () => {}
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const data = this.userForm.value;
      const model: UpdateUserDto = new UpdateUserDto(data);
      this.service.usersPUT(data.id, model).subscribe({
        next: (res: UserDtoBaseResponse) => {
          if (res.isSuccess) {
            this.ct.sendToaster("info", this.tr.get("SHARED.ServerDetails"), res.message);
            this.router.navigate(["/user/user-list"]);
          } else {
            res.errors!.forEach((element: any) => {
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

  onReturn() {
    this.router.navigate(["/user/user-list"]);
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
