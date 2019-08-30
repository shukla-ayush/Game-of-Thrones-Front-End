import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HouseServiceClient} from '../services/houses.service';
import {KingdomServiceClient} from '../services/kingdoms.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  constructor(private kingdomService: KingdomServiceClient,
              private service: HouseServiceClient,
              private router: Router) { }
  houses;
  house = [];
  name;
  region;
  kingdoms;
  selected_kingdom;

  ngOnInit() {
    this.name = null;
    this.region = null;
    this.house = [];
    this.selected_kingdom = 'Select a Kingdom';
    this.service.findAllHouses()
      .then(houses => {
        this.houses = houses;
        this.kingdomService.findAllKingdoms()
          .then(kingdoms => {
            this.kingdoms = kingdoms;
            console.log(this.kingdoms);
          });
      });
  }


  populate(house) {
    this.name = house[0];
    this.region = house[1];
  }

  updateHouse(house) {
    house.push(this.name);
    house.push(this.region);
    this.service
      .updateHouse(house)
      .then(response => {
        if (response === 'exception') {
          confirm('Please check the Input');
        }
        this.ngOnInit();
      });
  }

  createHouse(house) {
    house.push(this.name);
    house.push(this.region);
    house.push(0);
    this.service
      .createHouse(house)
      .then(response => {
        if (response === 'exception') {
          confirm('Please check the entered values: Either the house already exists or no such kingdom exists');
        }
        this.ngOnInit();
      });
  }

  deleteHouse(name) {
    this.service.deleteHouse(name)
      .then(() => this.ngOnInit());
  }

  getHousesForKingdom(kingdom) {
    if (kingdom === 'Select a Kingdom') {
      return;
    }
    this.service.filterServiceKingdom(kingdom)
      .then(houses => this.houses = houses);
  }
}
