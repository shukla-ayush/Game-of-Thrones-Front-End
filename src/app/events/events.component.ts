import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CharacterServiceClient} from '../services/characters.service';
import {AnimalServiceClient} from '../services/animals.service';
import {EventServiceClient} from '../services/events.service';
import {KingdomServiceClient} from '../services/kingdoms.service';
import {SeasonServiceClient} from '../services/seasons.service';

@Component({
  selector: 'app-characters',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private kingdomService: KingdomServiceClient,
              private seasonService: SeasonServiceClient,
              private service: EventServiceClient,
              private router: Router) { }

  events;
  event = [];
  name;
  number;
  region;
  description;
  kingdoms;
  selected_kingdom;
  seasons;
  selected_season;

  ngOnInit() {
    this.name = null;
    this.number = null;
    this.region = null;
    this.description = null;
    this.event = []
    // this.service.findAllEvents()
    //   .then(events => this.events = events);
    this.selected_kingdom = 'Select a Kingdom';
    this.selected_season = 'Select a Season';
    this.service.findAllEvents()
      .then(events => {
        this.events = events;
        this.kingdomService.findAllKingdoms()
          .then(kingdoms => {
            this.kingdoms = kingdoms;
            this.seasonService.finAllSeasons()
              .then(seasons => {
                this.seasons = seasons;
              });
          });
      });
  }

  populate(event) {
    this.name = event[0];
    this.number = event[1];
    this.region = event[2];
    this.description = event[3];
  }

  updateEvent(event) {
    event.push(this.name);
    event.push(this.number);
    event.push(this.region)
    event.push(this.description)
    this.service
      .updateEvent(event)
      .then(response => {
        if (response === 'exception') {
          confirm('Please check the Input');
        }
        this.ngOnInit();
      });
  }

  createEvent(event) {
    event.push(this.name);
    event.push(this.number);
    event.push(this.region);
    event.push(this.description);
    this.service
      .createEvent(event)
      .then(response => {
        if (response === 'exception') {
          confirm('Please check the entered values: Either the event already exists or no such season/region exists');
        }
        this.ngOnInit();
      });
  }

  deleteEvent(name) {
    this.service.deleteEvent(name)
      .then(() => this.ngOnInit());
  }

  getEventsForFilters(kingdom, season) {
    if (kingdom === 'Select a Kingdom' && season === 'Select a Season') {
      return;
    }
    if (kingdom === 'Select a Kingdom' && season !== 'Select a Season') {
      this.service.filterServiceSeason(season)
        .then(events => this.events = events);
    }
    if (kingdom !== 'Select a Kingdom' && season === 'Select a Season') {
      this.service.filterServiceKingdom(kingdom)
        .then(events => this.events = events);
    }
    if (kingdom !== 'Select a Kingdom' && season !== 'Select a Season') {
      this.service.filterServiceKingdomAndSeason(kingdom, season)
        .then(events => this.events = events);
    }
  }
}
