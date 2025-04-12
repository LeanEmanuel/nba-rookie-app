import {Component, Input} from '@angular/core';
import {ToastController} from "@ionic/angular";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {firstValueFrom} from "rxjs";
import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-top-app-bar',
  templateUrl: './top-app-bar.component.html',
  styleUrls: ['./top-app-bar.component.scss'],
  imports: [
    IonToolbar,
    IonBackButton,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonAlert,
    NgIf,
  ]
})
export class TopAppBarComponent {

  @Input() title: string = '';
  @Input() showBackButton = true

  isAlertOpen = false;

  // Buttons for logout confirmation alert
  alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Yes',
      handler: () => this.onLogoutConfirmed()
    }
  ];

  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) {
  }

  /**
   * Called when the user confirms logout in the alert.
   */
  async onLogoutConfirmed() {
    await this.logout();
    this.isAlertOpen = false;
  }

  /**
   * Performs logout using the AuthService and navigates to login.
   * Shows a toast with the result.
   */
  async logout() {

    console.log('[DEBUG] logout() called');
    try {
      await firstValueFrom(this.authService.logout());
      this.router.navigate(['/login']);
      this.presentToast('Logged out successfully');
    } catch (error) {
      console.error('Logout failed:', error);
      this.presentToast('Logout failed');
    }
  }

  /**
   * Shows a toast message at the bottom of the screen.
   */
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    await toast.present();
  }

  /**
   * Navigates to the photo capture page when the camera icon is clicked.
   */
  onCameraClick() {
    console.log('Camera icon clicked');
    this.router.navigate(['/photo-screen']);
  }
}
