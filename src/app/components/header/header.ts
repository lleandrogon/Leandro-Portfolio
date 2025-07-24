import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header {
  public responsiveNav:boolean = false;

  showResponsiveNav():void {
    this.responsiveNav = !this.responsiveNav;
    console.log('Menu state:', this.responsiveNav);
  }
}
