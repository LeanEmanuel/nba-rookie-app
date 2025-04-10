import {Component, Input} from '@angular/core';
import {IonBackButton, IonButtons, IonTitle, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-top-app-bar',
  templateUrl: './top-app-bar.component.html',
  styleUrls: ['./top-app-bar.component.scss'],
  imports: [
    IonToolbar,
    IonBackButton,
    IonTitle,
    IonButtons
  ]
})
export class TopAppBarComponent {

  @Input() title: string = '';

}
