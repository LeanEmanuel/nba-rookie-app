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
