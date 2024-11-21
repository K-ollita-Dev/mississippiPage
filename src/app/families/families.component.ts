import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-families',
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
  templateUrl: './families.component.html',
  styleUrl: './families.component.scss'
})
export class FamiliesComponent {
  testimonials = [
    {
      image: 'favicon.ico',
      title: 'Familia Roció Fernandez',
      subtitle: 'Andrew Purcell',
      content: '  "Andrew was warmly welcomed into the family. He was a very disciplined' +
        'young man who was true to his purpose in coming to Bolivia and was very' +
        'open to getting to know the family and participating in family activities.' +
        'We would happily repeat the experience as it was a pleasure having him in our home."'
    },
    {
      image: 'favicon.ico',
      title: 'Familia Zapata',
      sub: 'Renne Fox',
      content: '"Our exchange student from the University of Mississippi, Renne, was a truly' +
        'enriching and memorable experience. From the very first day, Renne exhibited ' +
        'a calm and respectful demeanor, fitting seamlessly into our home. Her passion ' +
        'for reading provided us with fascinating topics of conversation, and her presence' +
        'helped us become a more organized family. Through her, we not only learned more about' +
        'her culture and customs, but we also shared the values and traditions of our families' +
        'finding many commonalities. It was an invaluable experience that provided us with' +
        'new insights and a friendship that will last."'
    },
    {
      image: 'favicon.ico',
      title: 'Familia Rivero',
      sub: 'Anthony Gonzales',
      content: '"Anthony G., a young man who spoke Spanish very well, gained the confidence to be' +
        'very independent and explore the city on his own. As a coffee lover, he visited coffee' +
        'shops in La Paz that even we do not know about. One of his anecdotes? He accidentally took' +
        'the wrong minibus one day and ended up at the central cemetery instead of returning to the' +
        'south side. Luckily, he saw the cable car and turned the misfortune into a tour, enjoying the' +
        'beautiful views from the central station to the Green Line stop. He did not ask for help; he' +
        'figured it out on his own, and we had a good laugh when he told us about it. My son Mateo and me' +
        'enjoyed the short time we had with him, and he left happy to have experienced our country and the' +
        'activities organized by the university."'
    },
    {
      image: 'favicon.ico',
      title: 'Familia Sarmiento',
      sub: 'Sydney Smith',
      content: '"She was a bright and kind young woman with a wonderful command of Spanish, which made it'+
                'easy to connect. She loved the pork fricassee! Sydney quickly became a part of our family.'+
                'She and my daughter, Ana Cristina, were inseparable. We spent her free time exploring our city,'+
                'from the vibrant Rodríguez Market to the bustling El Alto fair. She was amazed. It was a month filled'+
                'with laughter and new experiences. We cherished her company and enjoyed hearing about her family. '+
                'We did everything we could to make her feel loved and at home. She left with a desire to return, knowing'+
                'she has a second home here."'
    }
  ];

}