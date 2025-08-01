import { Component } from '@angular/core';
import { SocialService } from '../../services/social-service';
import { CommonModule } from '@angular/common';
import { ContactInterface } from '../../interfaces/contact-interface';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})

export class Footer {
  constructor(public socialService: SocialService) {}

  public currentYear: number = new Date().getFullYear();
  public linkedin: string = "https://br.linkedin.com/in/leandro-gon%C3%A7alves-cris%C3%B3stomo-9936422b0?original_referer=https%3A%2F%2Fwww.linkedin.com%2F";

  contacts: ContactInterface[] = [
    {
      id: 1,
      name: "Telefone",
      icon: "fa-solid fa-phone",
      description: "+55 82 98809-4715"
    },
    {
      id: 2,
      name: "Endereço",
      icon: "fa-solid fa-house",
      description: "Maceió - Alagoas - Brasil"
    },
    {
      id: 3,
      name: "Email",
      icon: "fa-solid fa-envelope",
      description: "lleandrogon2004@gmail.com"
    },
  ];
}
