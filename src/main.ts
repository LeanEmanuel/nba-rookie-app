import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import {provideHttpClient} from "@angular/common/http";
import {addIcons} from "ionicons";
import {basketballOutline, cameraOutline, homeOutline, logOutOutline, shareOutline, starOutline} from "ionicons/icons";
import {provideFirebaseApp} from "@angular/fire/app";
import { initializeApp } from 'firebase/app';
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import { firebaseConfig } from "./app/firebase-config"


addIcons({
  homeOutline,
  basketballOutline,
  starOutline,
  shareOutline,
  logOutOutline,
  cameraOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideHttpClient(),
    provideRouter(routes, withPreloading(PreloadAllModules)),

    // Firebase
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});
