import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Observable, from} from 'rxjs';
import firebase from 'firebase/compat';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
  }

  register(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  login(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  logout(): Observable<void> {
    return new Observable(observer => {
      this.afAuth.signOut().then(() => {
        observer.next();
        observer.complete();
      }).catch(err => observer.error(err));
    });
  }

  get currentUser$(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }
}
