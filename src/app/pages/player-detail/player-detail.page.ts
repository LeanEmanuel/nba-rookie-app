import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonCard, IonCardContent,
  IonCardHeader,
  IonCardSubtitle, IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {PlayerStateService} from "../../services/player-state.service";
import {Player} from "../../models/player";
import {TopAppBarComponent} from "../../components/top-app-bar/top-app-bar.component";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.page.html',
  styleUrls: ['./player-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, TopAppBarComponent]
})
export class PlayerDetailPage implements OnInit {
  player: Player | null = null;

  constructor(private playerState: PlayerStateService) {
  }

  ngOnInit() {
    this.player = this.playerState.getSelectedPlayer();
  }

}
