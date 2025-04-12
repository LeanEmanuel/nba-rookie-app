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
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonItem,
    IonLabel,
    IonInput,
    IonNote,
    IonButton,
    RouterLink]
})

export class LoginPage {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {
  }

  /**
   * Handles the login form submission.
   * Validates form, calls auth service and navigates to home on success.
   */
  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const {email, password} = this.loginForm.value;

    this.authService.login(email!, password!).subscribe({
      next: (userCredential) => {
        console.log('User logged in:', userCredential.uid);
        this.router.navigateByUrl('/home', { replaceUrl: true });
      },
      error: (err) => {
        console.error('Login failed:', err.message);
        this.errorMessage = err.message;
      }
    });
  }
}
