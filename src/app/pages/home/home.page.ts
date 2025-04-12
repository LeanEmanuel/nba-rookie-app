import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonRouterLink} from '@ionic/angular/standalone';
import {TopAppBarComponent} from "../../components/top-app-bar/top-app-bar.component";

import {BottomNavBarComponent} from "../../components/bottom-nav-bar/bottom-nav-bar.component";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    CommonModule,
    FormsModule,
    TopAppBarComponent,
    IonButton,
    RouterLink,
    BottomNavBarComponent]
})
export class HomePage  {}
// HomePage is the landing page after login.
// Provides navigation to Player List and Favorites.
