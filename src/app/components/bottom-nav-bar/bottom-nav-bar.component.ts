import {Component, Input, OnInit} from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton} from "@ionic/angular/standalone";
import {Router, RouterLink} from "@angular/router";
import {getAuth, signOut} from "firebase/auth";

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
  imports: [
    IonTabBar,
    IonTabButton,
    RouterLink,
    IonIcon,
    IonLabel
  ]
})
export class BottomNavBarComponent {
  @Input() title: string = '';

  constructor(private router: Router) {
  }
}
