import { Component, OnInit } from '@angular/core';
import {SeasonServiceClient} from '../services/seasons.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  constructor(private service: SeasonServiceClient,
              private router: Router) { }

  seasons;
  nums;
  eps;
  season = [];

  ngOnInit() {
    this.nums = null;
    this.eps = null;
    this.season = [];
    this.service.finAllSeasons()
      .then(seasons => this.seasons = seasons);
  }

  populate(season) {
    this.nums = season[0];
    this.eps = season[1];
  }

  updateSeason(season) {
    const nums_i = parseInt(this.nums, 10);
    const eps_i = parseInt(this.eps, 10);

    if (isNaN(nums_i) || isNaN(eps_i)) {
      confirm('Please enter a numeric value');
      this.ngOnInit();
    } else {
      season.push(this.nums);
      season.push(this.eps);
      this.service
        .updateSeason(season)
        .then(response => {
          if (response === 'exception') {
            confirm('Please check the Input');
          }
          this.ngOnInit();
        });

    }
  }


  createSeason(season) {
    const nums_i = parseInt(this.nums, 10);
    const eps_i = parseInt(this.eps, 10);

    if (isNaN(nums_i) || isNaN(eps_i)) {
      confirm('Please enter a numeric value');
      this.ngOnInit();
    } else {
      season.push(this.nums);
      season.push(this.eps);
      this.service
        .createSeason(season)
        .then(response => {
          if (response === 'duplicate') {
            confirm('Season Number Already Exists');
          }
          this.ngOnInit();
        });

    }
  }

  deleteSeason(num) {
    this.service.deleteSeason(num)
      .then(response => {
        if (response === 'exception') {
          confirm('This season cannot be deleted, as some dependent event exists that ' +
            'restricts this operation, Please delete all events for this season first');
        }
        this.ngOnInit();
      });
  }
}
