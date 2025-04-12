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
import {PlayerStateService} from "../../services/player/player-state.service";
import {Player} from "../../models/player";
import {TopAppBarComponent} from "../../components/top-app-bar/top-app-bar.component";
import {BottomNavBarComponent} from "../../components/bottom-nav-bar/bottom-nav-bar.component";
import {PlayerStorageService} from "../../services/player/player-storage.service";
import {Share} from "@capacitor/share";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.page.html',
  styleUrls: ['./player-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, TopAppBarComponent, IonButton, IonIcon, BottomNavBarComponent]
})
export class PlayerDetailPage implements OnInit {
  player: Player | null = null;
  isFavorite: boolean = false;
  animating: boolean = false;

  constructor(
    private playerState: PlayerStateService,
    private playerStorage: PlayerStorageService
  ) {
  }

  /**
   * Loads the selected player from shared state.
   * Checks if the player is marked as favorite.
   */
  async ngOnInit() {
    this.player = this.playerState.getSelectedPlayer();
    if (this.player) {
      this.isFavorite = await this.playerStorage.isFavorite(this.player.id);
    }
  }

  /**
   * Toggles the favorite state of the player.
   * Applies animation to the star icon.
   */
  async toggleFavorite() {
    if (!this.player) return;

    this.isFavorite = !this.isFavorite;
    this.animating = true;

    await this.playerStorage.toggleFavorite(this.player);

    setTimeout(() => {
      this.animating = false;
    }, 400);
  }

  /**
   * Shares the player information using native Share plugin.
   */
  async sharePlayer() {
    const canShare = await Share.canShare();
    console.log('[DEBUG] Can Share?', canShare.value);

    if (!canShare.value) {
      console.warn('Sharing is not supported in this environment');
      return;
    }

    await Share.share({
      title: 'Share Player',
      text: `${this.player?.first_name} ${this.player?.last_name} - ${this.player?.team.full_name}`,
      dialogTitle: 'Share this player'
    });
  }

}
