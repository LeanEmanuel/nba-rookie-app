import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader, IonIcon,
  IonInfiniteScroll, IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import {ApiService} from "../../services/api.service";
import {Player} from "../../models/player";
import {PlayerStateService} from '../../services/player-state.service';
import {Router} from "@angular/router";
import {TopAppBarComponent} from "../../components/top-app-bar/top-app-bar.component";
import {BottomNavBarComponent} from "../../components/bottom-nav-bar/bottom-nav-bar.component";
import {Share} from "@capacitor/share";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.page.html',
  styleUrls: ['./player-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonInfiniteScroll, IonInfiniteScrollContent, IonButton, IonIcon, BottomNavBarComponent, TopAppBarComponent]
})
export class PlayerListPage implements OnInit {
  players: Player[] = [];
  currentPage = 1;
  isLoading = false;

  constructor(
    private nbaService: ApiService,
    private playerState: PlayerStateService,
    private router: Router) {
  }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers(event?: any) {
    if (this.isLoading) return;
    this.isLoading = true;

    this.nbaService.getPlayers(this.currentPage).subscribe((res) => {
      this.players.push(...res.data);
      this.currentPage++;
      this.isLoading = false;

      if (event) {
        event.target.complete();
      }
    });
  }

  goToPlayerDetail(player: Player) {
    this.playerState.setSelectedPlayer(player);
    this.router.navigate(['/player-detail']);
  }

  async sharePlayer(player: Player) {
    try {
      await Share.share({
        title: 'Share Player',
        text: `${player.first_name} ${player.last_name} - ${player.team.full_name}`,
      });
    } catch (error) {
      console.error('Share failed:', error);
    }
  }
}
