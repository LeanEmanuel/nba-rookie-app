import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user-camera',
  standalone: true,
  imports: [CommonModule, IonicModule, NgOptimizedImage],
  templateUrl: './user-camera.component.html',
  styleUrls: ['./user-camera.component.scss'],
})
export class UserCameraComponent {
  imageDataUrl: string | null = null;

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt // Prompt: permite elegir entre cámara o galería
      });

      this.imageDataUrl = image.webPath!;
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }
}

