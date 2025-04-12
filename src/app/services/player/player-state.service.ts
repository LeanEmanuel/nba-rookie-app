import {Injectable} from '@angular/core';
import {Player} from '../../models/player';

@Injectable({providedIn: 'root'})
export class PlayerStateService {
  private selectedPlayer: Player | null = null;

  /**
   * Stores the currently selected player in memory.
   */
  setSelectedPlayer(player: Player) {
    this.selectedPlayer = player;
  }

  /**
   * Retrieves the previously selected player.
   */
  getSelectedPlayer(): Player | null {
    return this.selectedPlayer;
  }
}

