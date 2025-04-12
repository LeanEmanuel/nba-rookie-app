import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, ReactiveFormsModule, IonItem, IonLabel, IonInput, IonNote, IonButton, RouterLink]
})
export class RegisterPage {

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repeatPassword: ['', [Validators.required]],
  }, {validators: this.passwordsMatchValidator});

  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {
  }

  /**
   * Handles user registration.
   * - Validates form.
   * - Compares password and repeatPassword.
   * - Calls AuthService to register.
   * - Redirects to /home on success.
   * - Sets error message on failure.
   */
  onRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const {email, password, repeatPassword} = this.registerForm.value;

    if (password !== repeatPassword) {
      console.error('Passwords do not match');
      return;
    }

    this.authService.register(email!, password!).subscribe({
      next: (userCredential) => {
        console.log('User registered successfully:', userCredential.uid);
        this.router.navigateByUrl('/home', {replaceUrl: true});
      },
      error: (err) => {
        this.errorMessage = err.message;
        console.error('Registration failed:', err.message);
      }
    });
  }

  /**
   * Custom validator to ensure both password fields match.
   */
  private passwordsMatchValidator(form: any) {
    const pass = form.get('password')?.value;
    const repeat = form.get('repeatPassword')?.value;
    return pass === repeat ? null : {mismatch: true};
  }
}
