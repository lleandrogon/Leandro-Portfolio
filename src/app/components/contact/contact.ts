import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})

export class Contact {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required])
  });

  sendWhatsapp(): void {
    const name: string = this.contactForm.value.name;
    const email: string = this.contactForm.value.email;
    const message: string = this.contactForm.value.message;

    const whatsappNumber: string = "5582988094715";
    const whatsappMessage: string = `Nome: ${name}\nEmail: ${email}\n\nMensagem: ${message}`;
    const codification: string = encodeURIComponent(whatsappMessage);
    const link = `https://wa.me/${whatsappNumber}?text=${codification}`;

    window.open(link, '_blank');
  }

  sendEmail(): void {
    const name: string = this.contactForm.value.name;
    const email: string = this.contactForm.value.email;
    const message: string = this.contactForm.value.message;

    const emailLink = `mailto:lleandrogon2004@gmail.com?subject=Contato pelo Portfólio&body=Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;
    
    window.open(emailLink, '_blank');
  }
}
