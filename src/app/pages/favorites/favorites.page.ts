import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertController, IonicModule, ToastController} from '@ionic/angular';
import { PlayerStorageService } from '../../services/player-storage.service';
import { Player } from '../../models/player';
import { RouterModule } from '@angular/router';
import {BottomNavBarComponent} from "../../components/bottom-nav-bar/bottom-nav-bar.component";
import {TopAppBarComponent} from "../../components/top-app-bar/top-app-bar.component";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, BottomNavBarComponent, TopAppBarComponent],
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: Player[] = [];
  animatingId: number | null = null;

  constructor(
    private playerStorage: PlayerStorageService,
    private toastController: ToastController,
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    const alert = await this.alertCtrl.create({
      header: 'Test',
      message: 'Hello from Android',
      buttons: ['OK']
    });
    await alert.present();
    this.favorites = await this.playerStorage.getFavorites();
  }

  async toggleFavorite(player: Player) {
    this.animatingId = player.id;

    await this.playerStorage.toggleFavorite(player);
    this.favorites = this.favorites.filter(p => p.id !== player.id);
    await this.presentToast(`${player.first_name} removed from favorites`);

    setTimeout(() => {
      this.animatingId = null;
    }, 400);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'primary'
    });
    await toast.present();
  }
}

