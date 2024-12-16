import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatCardModule,
    MatListModule,
    CommonModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    RouterModule,
 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  [x: string]: any;
  selectedFilter: string = 'all';

  images = ['img/Home.jpg', 'img/airportlpb.jpeg']; // Rutas de las imágenes
  texts = ['Fulbright-Hays in Bolivia', 'Wait for Us, Fulbrighthuys 2026, is Comming....']; // Textos asociados a cada imagen

  currentImageIndex = 0;

  constructor() {
    this.startImageTransition();
  }

  startImageTransition() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000); // Cambia cada 5 segundos
  }

  // Lista de imágenes con sus respectivas etiquetas
  photos = [
    { src: 'img/gallery/img1.jpg', alt: 'Naturaleza 1', tags: 'adventuresAndExplorations', name: 'Culture and Traditions | Salar de Uyuni' },
    { src: 'img/gallery/img2.jpg', alt: 'Naturaleza 1', tags: 'learning', name: 'Learning | UCB' },
    { src: 'img/gallery/img3.jpg', alt: 'Naturaleza 1', tags: 'adventuresAndExplorations', name: 'Adventures and Explorations | Salar de uyuni' },
    { src: 'img/gallery/img4.jpg', alt: 'Naturaleza 1', tags: 'cultureAndTraditions', name: 'Culture and Traditions' },
    { src: 'img/gallery/img5.jpg', alt: 'Naturaleza 1', tags: 'adventuresAndExplorations', name: 'Adventures and Explorations | Salar de uyuni' },
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
  ];

  // Método para seleccionar el filtro
  filterPhotos(tag: string): void {
    this.selectedFilter = tag;
  }

  // Método para determinar si una foto debe mostrarse
  isPhotoVisible(photoTags: string): boolean {
    return this.selectedFilter === 'all' || photoTags.includes(this.selectedFilter);
  }
  testimonials = [
    {
      image: 'img/testimonials/Hannah.jpeg',
      title: 'Hannah Dear',
      content: ' professional life. My mind and heart have become more flexible, and I have developed greater discipline and compassion, as well as a growing love for Spanish and Latin America. Every time I travel, I feel humbled realizing how little I know compared to what I thought. The variety of people I met and the different ways of life in Bolivia helped me understand the world from a different perspective. My Spanish improved significantly, so much so that by the end of my stay, I was dreaming in Spanish. Living with an incredible host family and having the support of the Waliki Friends made this time unforgettable. I am deeply grateful for this experience and hope to return to Bolivia, God willing."'
    },
    {
      image: 'img/testimonials/Anthony.jpeg',
      title: 'Jorge Anthony González',
      content: '"My time in Bolivia has been one of the best experiences of my life. Thanks to my host family and the Waliki Friends, I developed a deep love for Bolivia and significantly improved my Spanish. While I faced some challenges, such as the chaotic traffic in La Paz and the difficult working conditions I saw in the Potosí mines, I was able to adapt and appreciate even more the uniqueness of this country. The talks and presentations gave me a better understanding of Bolivia’s political situation, and this experience taught me to observe different environments with sensitivity and a critical eye. I am deeply grateful to have lived this experience and hope to return soon."'
    },
    {
      image: 'img/testimonials/Hailey.jpeg',
      title: 'Hailey Smith',
      content: '"This trip to Bolivia was my first experience outside of the United States, and although I was nervous at first, I overcame my fears and enjoyed every moment. The presentations by our guests were fascinating and allowed me to learn a lot about Bolivia. Having the Waliki Friends as support was invaluable, as they helped me navigate the city and provided constant guidance. My time with my host family was wonderful; they did not speak much English, which was an advantage for improving my Spanish. Through them, I was able to see La Paz from a local perspective. The experience was educational and gave me more confidence to face challenges in other international settings."'
    },
    {
      image: 'img/testimonials/Alex.jpeg',
      title: 'Alex Shelton',
      content: '"My time in Bolivia was a transformative experience that changed my perspective and solidified my professional aspirations. Before arriving, I used to be quite introverted and spent a lot of time alone, but living with a host family and being surrounded by the Waliki Friends helped me become more sociable and happy. Visits to places like Uyuni and Madidi were highlights of my trip; they allowed me to connect deeply with Bolivian culture and landscapes. This experience also helped me understand the challenges in the healthcare system, especially in rural areas, reinforcing my interest in medicine and a humanistic approach to healthcare. I am deeply grateful to the UCB and everyone who made this unforgettable experience possible."'
    }
  ];
  currentTestimonialIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.interval = setInterval(() => {
      this.nextTestimonial();
    }, 5000); // Cambia cada 5 segundos
  }

  stopAutoSlide(): void {
    clearInterval(this.interval);
  }

  nextTestimonial(): void {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  previousTestimonial(): void {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

}