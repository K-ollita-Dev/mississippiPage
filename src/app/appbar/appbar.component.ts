import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-appbar',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule
  ],
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class AppbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      // rutas
        { label: 'Home', icon: 'pi pi-home',styleClass: 'active', id: 'inicio', replaceUrl: true, routerLink: '/home' },
        { label: 'About the Program', icon: 'pi pi-users', id: 'sobre-nosotros', replaceUrl: true, routerLink: '/about' },
        { 
          label: 'University', 
          icon: 'pi pi-fw pi-building-columns',
          id: 'universidad',
          items: [
            { label: 'In Person Class', icon: 'pi pi-fw pi-book', id: 'presenciales', replaceUrl:true, routerLink: '/classes' },
            { label: 'Virtual Class', icon: 'pi pi-fw pi-desktop', id: 'virtuales', replaceUrl:true, routerLink: '/virtual' },
          ]
        },
        { 
          label: 'Lived experiences', 
          icon: 'pi pi-fw pi-star',
          id: 'experiencias',
          items: [
            { label: 'Waliki Friends', icon: 'pi pi-fw pi-star', id: 'waliki-friends', replaceUrl:true, routerLink: '/waliki' },
            { label: 'Gallery', icon: 'pi pi-fw pi-star', id: 'galery', replaceUrl:true, routerLink: '/media' },
          ]
        },
        { label: 'Host Families', icon: 'pi pi-fw pi-users', id: 'familias-de-acogida', replaceUrl:true, routerLink: '/families' },

      ];
  }
}