import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SeasonServiceClient} from '../services/seasons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: SeasonServiceClient,
              private router: Router) {}

  schedule;
  user = {
    username: '',
    password: '',
    userType: '',
    firstName: '',
    lastName: '',
    email: '',
    schedule: {
      id: ''
    }
  };

  ngOnInit() {
  }


}
