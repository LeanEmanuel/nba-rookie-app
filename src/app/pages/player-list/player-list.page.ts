import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {ApiService} from "../../services/api.service";
import {Player} from "../../models/player";
import {PlayerStateService} from '../../services/player-state.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.page.html',
  styleUrls: ['./player-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem]
})
export class PlayerListPage implements OnInit {
  players: Player[] = [];

  constructor(
    private nbaService: ApiService,
    private playerState: PlayerStateService,
    private router: Router) {
  }

  ngOnInit() {
    this.nbaService.getPlayers().subscribe((res) => {
      this.players = res.data;
    });
  }

  goToPlayerDetail(player: Player) {
    this.playerState.setSelectedPlayer(player);
    this.router.navigate(['/player-detail']);
  }
}
