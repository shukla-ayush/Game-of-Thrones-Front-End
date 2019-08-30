import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {KingdomServiceClient} from '../services/kingdoms.service';

@Component({
  selector: 'app-kingdoms',
  templateUrl: './kingdoms.component.html',
  styleUrls: ['./kingdoms.component.css']
})
export class KingdomsComponent implements OnInit {

  constructor(private service: KingdomServiceClient,
              private router: Router) { }

  kingdoms;
  name;
  capital;
  description;
  kingdom = [];

  ngOnInit() {
    this.name = null;
    this.capital = null;
    this.description = null;
    this.kingdom = []
    this.service.findAllKingdoms()
      .then(kingdoms => this.kingdoms = kingdoms);
  }

  populate(kingdom) {
    this.name = kingdom[0];
    this.capital = kingdom[1];
    this.description = kingdom[2];
  }

  updateKingdom(kingdom) {
    kingdom.push(this.name);
    kingdom.push(this.capital);
    kingdom.push(this.description)
    this.service
      .updateKingdom(kingdom)
      .then(response => {
        if (response === 'exception') {
          confirm('Please check the Input');
        }
        this.ngOnInit();
      });
  }

  createKingdom(kingdom) {
    kingdom.push(this.name);
    kingdom.push(this.capital);
    kingdom.push(this.description);
    this.service
      .createKingdom(kingdom)
      .then(response => {
        if (response === 'duplicate') {
          confirm('Kingdom Already Exists');
        }
        this.ngOnInit();
      });
  }

  deleteKingdom(name) {
    this.service.deleteKingdom(name)
      .then(response => {
        if (response === 'exception') {
          confirm('This season cannot be deleted, as some dependent event exists that ' +
            'restricts this operation, Please delete all events for this season first');
        }
        this.ngOnInit();
      });
  }
}
