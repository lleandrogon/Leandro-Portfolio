import { Injectable } from '@angular/core';
import { SocialInterface } from '../interfaces/social-interface';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  public socials:SocialInterface[] = [
    {
      id: 1,
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/lleandrogon/"
    },
    {
      id: 2,
      name: "GitHub",
      icon: "fa-brands fa-github",
      link: "https://github.com/lleandrogon"
    },
    {
      id: 3,
      name: "WhatsApp",
      icon: "fa-brands fa-whatsapp",
      link: "https://wa.me/5582988094715"
    }
  ];
}
