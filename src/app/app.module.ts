import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routing';
import {SeasonServiceClient} from './services/seasons.service';
import { SeasonsComponent } from './seasons/seasons.component';
import {KingdomsComponent} from './kingdoms/kingdoms.component';
import {KingdomServiceClient} from './services/kingdoms.service';
import {HousesComponent} from './houses/houses.component';
import {HouseServiceClient} from './services/houses.service';
import {CharactersComponent} from './characters/characters.component';
import {CharacterServiceClient} from './services/characters.service';
import {AnimalsComponent} from './animals/animals.component';
import {AnimalServiceClient} from './services/animals.service';
import {EventsComponent} from './events/events.component';
import {EventServiceClient} from './services/events.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeasonsComponent,
    KingdomsComponent,
    HousesComponent,
    CharactersComponent,
    AnimalsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    SeasonServiceClient,
    KingdomServiceClient,
    HouseServiceClient,
    CharacterServiceClient,
    AnimalServiceClient,
    EventServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
