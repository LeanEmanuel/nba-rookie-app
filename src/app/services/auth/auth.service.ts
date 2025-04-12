import {Injectable, inject} from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import {from, map, Observable} from 'rxjs';
import { Auth } from '@angular/fire/auth';

@Injectable({providedIn: 'root'})
export class AuthService {
  private auth = inject(Auth);

  register(email: string, password: string): Observable<User> {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      map(cred => cred.user)
    );
  }

  login(email: string, password: string): Observable<User> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map(cred => cred.user)
    );
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  get currentUser(): User | null {
    return this.auth.currentUser;
  }

  listenAuthChanges(): Observable<User | null> {
    return new Observable((observer) => {
      return onAuthStateChanged(this.auth, observer);
    });
  }
}
