import { Component, HostListener} from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title: string = 'DLOR';
  menu: string[] = ["Home", "Shop", "Contact"];
  isOpen: boolean = false;
  isScrolled: boolean = false;
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
    this.document.addEventListener('scroll', () => {
      const header = this.document.querySelector('header');
      if (this.document.documentElement.scrollTop === 0) {
        this.renderer.addClass(header, 'black-background');
      } else {
        this.renderer.removeClass(header, 'black-background');

      }
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll():void {
    const scrollOffset:number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollOffset > 100) { // replace 100 with the scroll position you want
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  openMenu():void {
    this.renderer?.addClass(this.document.body, 'menu-open');
  }

  closeMenu() {
    this.renderer?.removeClass(this.document.body, 'menu-open');
  }
  toggleMenu() {
    this.isOpen = !(this.isOpen);
    console.log(this.isOpen);
    const hamburger = document.querySelector('.hamburger-menu');
    hamburger?.classList.toggle('open');
    if (this.isOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }
}