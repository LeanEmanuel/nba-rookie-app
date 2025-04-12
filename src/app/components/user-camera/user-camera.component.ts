import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BottomNavBarComponent} from "../bottom-nav-bar/bottom-nav-bar.component";

@Component({
  selector: 'app-user-camera',
  standalone: true,
  imports: [CommonModule, IonicModule, NgOptimizedImage, BottomNavBarComponent],
  templateUrl: './user-camera.component.html',
  styleUrls: ['./user-camera.component.scss'],
})
export class UserCameraComponent {
  imageDataUrl: string | null = null;
  isLoading = false

  /**
   * Prompts the user to take a photo or choose one from the gallery.
   * Saves the photo to the gallery and sets it for preview.
   */
  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt, // Prompt: permite elegir entre cámara o galería
        saveToGallery: true
      });

      this.imageDataUrl = image.webPath!;
    } catch (error) {
      console.error('Failed to take or choose photo:', error);
    }
  }
}

