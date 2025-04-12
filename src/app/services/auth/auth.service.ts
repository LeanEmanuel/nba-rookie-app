import {Injectable, inject} from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import {from, map, Observable} from 'rxjs';
import {Auth} from '@angular/fire/auth';

@Injectable({providedIn: 'root'})
export class AuthService {
  private auth = inject(Auth);

  /**
   * Registers a new user with email and password.
   */
  register(email: string, password: string): Observable<User> {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      map(cred => cred.user)
    );
  }

  /**
   * Logs in a user with email and password.
   */
  login(email: string, password: string): Observable<User> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map(cred => cred.user)
    );
  }

  /**
   * Logs out the current user.
   */
  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  /**
   * Observable that emits on auth state changes.
   */
  listenAuthChanges(): Observable<User | null> {
    return new Observable((observer) => {
      return onAuthStateChanged(this.auth, observer);
    });
  }
}
