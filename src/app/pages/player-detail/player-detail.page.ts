import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonCard, IonCardContent,
  IonCardHeader,
  IonCardSubtitle, IonCardTitle,
  IonContent,
  IonHeader, IonIcon,
} from '@ionic/angular/standalone';
import {PlayerStateService} from "../../services/player-state.service";
import {Player} from "../../models/player";
import {TopAppBarComponent} from "../../components/top-app-bar/top-app-bar.component";
import {BottomNavBarComponent} from "../../components/bottom-nav-bar/bottom-nav-bar.component";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.page.html',
  styleUrls: ['./player-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, TopAppBarComponent, IonButton, IonIcon, BottomNavBarComponent]
})
export class PlayerDetailPage implements OnInit {
  player: Player | null = null;

  constructor(private playerState: PlayerStateService) {
  }

  ngOnInit() {
    this.player = this.playerState.getSelectedPlayer();
  }

  sharePlayer() {
    if (!this.player) return;
    console.log(`Compartiendo a ${this.player.first_name} ${this.player.last_name}`);
    // Aquí se implementará la funcionalidad nativa más adelante
  }

}
