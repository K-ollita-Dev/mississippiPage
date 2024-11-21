import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatTabsModule,
  ],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {
  [x: string]: any;
  selectedFilter: string = 'all';
  
  // Lista de imágenes con sus respectivas etiquetas
  photos = [
    { src: 'img/gallery/img1.jpg', alt: 'Naturaleza 1', tags: 'adventuresAndExplorations', name: 'Culture and Traditions | Salar de Uyuni' },
    { src: 'img/gallery/img2.jpg', alt: 'Naturaleza 1', tags: 'learning', name: 'Learning | UCB'},
    { src: 'img/gallery/img3.jpg', alt: 'Naturaleza 1', tags: 'adventuresAndExplorations', name: 'Adventures and Explorations | Salar de uyuni'},
    { src: 'img/gallery/img4.jpg', alt: 'Naturaleza 1', tags: 'cultureAndTraditions', name: 'Culture and Traditions' },
    { src: 'img/gallery/img5.jpg', alt: 'Naturaleza 1', tags: 'adventuresAndExplorations', name: 'Adventures and Explorations | Salar de uyuni'},
    { src: 'img/gallery/img6.jpg', alt: 'Arquitectura 1', tags: 'cultureAndTraditions', name: 'Adventures and Explorations | Potosi' },
    { src: 'img/gallery/img7.jpg', alt: 'Arquitectura 1', tags: 'learning', name: 'Learning | UCB' },
    { src: 'img/gallery/img8.jpg', alt: 'Arquitectura 1', tags: 'cultureAndTraditions', name: 'Culture and Traditions | Tihuanacu' },
    { src: 'img/gallery/img9.jpg', alt: 'Arquitectura 1', tags: 'learning', name: 'Learning' },
    { src: 'img/gallery/img10.jpg', alt: 'Arquitectura 1', tags: 'adventuresAndExplorations', name: 'Adventures and Explorations | Salar de uyuni' },
    { src: 'img/gallery/img11.jpg', alt: 'Animales 1', tags: 'adventuresAndExplorations', name: 'Adventures and Explorations | Salar de uyuni' },
    { src: 'img/gallery/img12.jpg', alt: 'Animales 1', tags: 'adventuresAndExplorations', name: 'Adventures and Explorations' },
    { src: 'img/gallery/img13.jpg', alt: 'Animales 1', tags: 'adventuresAndExplorations', name: 'Adventures and Explorations | Salar de uyuni' },
    { src: 'img/gallery/img14.jpg', alt: 'Animales 1', tags: 'cultureAndTraditions', name: 'Culture and Traditions' },
    { src: 'img/gallery/img15.jpg', alt: 'Animales 1', tags: 'cultureAndTraditions', name: 'Culture and Traditions' },
    { src: 'img/gallery/img16.jpg', alt: 'Animales 1', tags: 'learning', name: 'Learning | UCB' },
    { src: 'img/gallery/img17.jpg', alt: 'Animales 1', tags: 'adventuresAndExplorations', name: 'Adventures And Explorations | Calle de Las Brujas' },
    { src: 'img/gallery/img18.jpg', alt: 'Naturaleza 1', tags: 'adventuresAndExplorations', name: 'Adventures And Explorations | Salar de Uyuni' },
    { src: 'img/gallery/img19.jpg', alt: 'Naturaleza 1', tags: 'adventuresAndExplorations', name: 'Adventures And Explorations' },
    { src: 'img/gallery/img20.jpg', alt: 'Naturaleza 1', tags: 'adventuresAndExplorations', name: 'Adventures And Explorations' },
    { src: 'img/gallery/img21.jpg', alt: 'Naturaleza 1', tags: 'cultureAndTraditions', name: 'Culture and Traditions' },
    { src: 'img/gallery/img22.jpg', alt: 'Naturaleza 1', tags: 'cultureAndTraditions', name: 'Culture and Traditions' },
    { src: 'img/gallery/img23.jpg', alt: 'Naturaleza 1', tags: 'cultureAndTraditions', name: 'Culture and Traditions' },
    { src: 'img/gallery/img24.jpg', alt: 'Naturaleza 1', tags: 'adventuresAndExplorations', name: 'Adventures And Explorations' },
  ];

  // Método para seleccionar el filtro
  filterPhotos(tag: string): void {
    this.selectedFilter = tag;
  }

  // Método para determinar si una foto debe mostrarse
  isPhotoVisible(photoTags: string): boolean {
    return this.selectedFilter === 'all' || photoTags.includes(this.selectedFilter);
  }

}
