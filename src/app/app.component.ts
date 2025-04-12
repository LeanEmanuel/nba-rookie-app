import {Component} from '@angular/core';
import {IonApp, IonContent, IonRouterOutlet, IonSpinner, Platform} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonContent, IonSpinner, NgIf],
})
export class AppComponent {
  loading: Boolean = true;

  constructor(
    private router: Router,
    private platform: Platform,
    private authService: AuthService
  ) {
    this.initAuth();
  }

  async initAuth() {
    await this.platform.ready();
    this.authService.listenAuthChanges().subscribe((user) => {
      this.loading = false;
      if (user) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
