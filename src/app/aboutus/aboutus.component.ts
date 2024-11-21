import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatList, MatListModule } from '@angular/material/list';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    MatCardModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    MatListModule
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class AboutusComponent {

}