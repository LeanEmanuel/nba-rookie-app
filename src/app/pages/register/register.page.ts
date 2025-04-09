import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonItem, IonLabel, IonInput, IonNote, IonButton, RouterLink]
})
export class RegisterPage {

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repeatPassword: ['', [Validators.required]],
  }, { validators: this.passwordsMatchValidator });

  constructor(private fb: FormBuilder, private router: Router) { }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('User registered:', this.registerForm.value);
      this.router.navigateByUrl('/login');
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  private passwordsMatchValidator(form: any) {
    const pass = form.get('password')?.value;
    const repeat = form.get('repeatPassword')?.value;
    return pass === repeat ? null : { mismatch: true };
  }
}
