import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({ providedIn: 'root' })
export class PlayerStateService {
  private selectedPlayer: Player | null = null;

  setSelectedPlayer(player: Player) {
    this.selectedPlayer = player;
  }

  getSelectedPlayer(): Player | null {
    return this.selectedPlayer;
  }
}

