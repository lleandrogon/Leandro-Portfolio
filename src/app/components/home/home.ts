import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialService } from '../../services/social-service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  constructor(public socialService: SocialService) {}
}
