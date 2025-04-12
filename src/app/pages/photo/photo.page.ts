import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { UserCameraComponent } from '../../components/user-camera/user-camera.component';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule, IonicModule, UserCameraComponent],
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {}
// This page is responsible for rendering the camera component.
// It does not contain additional logic, as all functionality
// is encapsulated in the <app-user-camera> component.
