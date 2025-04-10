import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonInfiniteScroll, IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ApiService} from "../../services/api.service";
import {Player} from "../../models/player";
import {PlayerStateService} from '../../services/player-state.service';
import {Router} from "@angular/router";
import {TopAppBarComponent} from "../../components/top-app-bar/top-app-bar.component";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.page.html',
  styleUrls: ['./player-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem, TopAppBarComponent, IonInfiniteScroll, IonInfiniteScrollContent]
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
}
