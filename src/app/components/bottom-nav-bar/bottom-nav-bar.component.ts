import {Component, OnInit} from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

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
export class BottomNavBarComponent { }
