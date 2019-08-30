import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SeasonsComponent} from './seasons/seasons.component';
import {KingdomsComponent} from './kingdoms/kingdoms.component';
import {HousesComponent} from './houses/houses.component';
import {CharactersComponent} from './characters/characters.component';
import {AnimalsComponent} from './animals/animals.component';
import {EventsComponent} from './events/events.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'seasons', component: SeasonsComponent},
  { path: 'kingdoms', component: KingdomsComponent},
  { path: 'houses', component: HousesComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'animals', component: AnimalsComponent},
  { path: 'events', component: EventsComponent},
  { path: '**', component: HomeComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
