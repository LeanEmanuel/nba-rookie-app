import {Injectable} from '@angular/core';
import {Player} from '../../models/player';
import {getAuth} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  getDoc
} from 'firebase/firestore';
import {collection, getDocs, query} from "firebase/firestore";


@Injectable({providedIn: 'root'})
export class PlayerStorageService {
  private db = getFirestore();

  /**
   * Adds or removes a player from the user's favorites.
   */
  async toggleFavorite(player: Player): Promise<void> {
    const uid = getAuth().currentUser?.uid;
    if (!uid) throw new Error('User not authenticated');

    const playerRef = doc(this.db, `users/${uid}/favorites/${player.id}`);
    const snapshot = await getDoc(playerRef);

    if (snapshot.exists()) {
      await deleteDoc(playerRef);
    } else {
      await setDoc(playerRef, {
        id: player.id,
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        position: player.position,
        jersey_number: player.jersey_number || null,
        height: player.height,
        weight: player.weight,
        country: player.country
      });
    }
  }

  /**
   * Checks if a player is in the user's favorites.
   */
  async isFavorite(playerId: number): Promise<boolean> {
    const uid = getAuth().currentUser?.uid;
    if (!uid) return false;

    const playerRef = doc(this.db, `users/${uid}/favorites/${playerId}`);
    const snapshot = await getDoc(playerRef);
    return snapshot.exists();
  }

  /**
   * Retrieves all favorite players for the user.
   */
  async getFavorites(): Promise<Player[]> {
    const uid = getAuth().currentUser?.uid;
    if (!uid) return [];

    const favoritesRef = collection(this.db, `users/${uid}/favorites`);
    const q = query(favoritesRef);
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => doc.data() as Player);
  }
}
