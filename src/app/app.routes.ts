import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FamiliesComponent } from './families/families.component';
import { VirtualComponent } from './virtual/virtual.component';
import { ClassesComponent } from './classes/classes.component';
import { MediaComponent } from './media/media.component';
import { WalikiComponent } from './waliki/waliki.component';

export const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent,},
    {path: 'about', component: AboutusComponent,},
    {path: 'virtual', component: VirtualComponent},
    {path: 'classes',component: ClassesComponent},
    {path: 'media', component: MediaComponent},
    {path: 'waliki', component: WalikiComponent},
    {path: 'families', component: FamiliesComponent},
];
