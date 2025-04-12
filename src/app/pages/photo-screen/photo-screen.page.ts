import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import {BottomNavBarComponent} from "../../components/bottom-nav-bar/bottom-nav-bar.component";
import {IonContent, IonHeader} from "@ionic/angular/standalone";
import {TopAppBarComponent} from "../../components/top-app-bar/top-app-bar.component";
import {UserCameraComponent} from "../../components/user-camera/user-camera.component";

@Component({
  selector: "app-photo",
  templateUrl: "./photo-screen.page.html",
  styleUrls: ["./photo-screen.page.scss"],
  standalone: true,
  imports: [CommonModule, BottomNavBarComponent, IonHeader, TopAppBarComponent, IonContent, UserCameraComponent],
})
export class PhotoScreenPage {}
