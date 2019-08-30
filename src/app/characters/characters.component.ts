import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CharacterServiceClient} from '../services/characters.service';
import {HouseServiceClient} from '../services/houses.service';
import {KingdomServiceClient} from '../services/kingdoms.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private houseService: HouseServiceClient,
              private kingdomService: KingdomServiceClient,
              private service: CharacterServiceClient,
              private router: Router) { }

  characters;
  character = [];
  name;
  house;
  description;
  status;
  selected_house;
  selected_kingdom;
  selected_status;
  houses;
  kingdoms;

  ngOnInit() {
    this.name = null;
    this.house = null;
    this.description = null;
    this.status = null;
    this.character = [];
    this.selected_house = 'Select a House';
    this.selected_status = 'Select Dead/Alive';
    this.selected_kingdom = 'Select a Kingdom';
    this.service.findAllCharacters()
      .then(characters => {
        this.characters = characters;
        this.houseService.findAllHouses()
          .then(houses => {
            this.houses = houses;
            this.kingdomService.findAllKingdoms()
              .then(kingdoms => this.kingdoms = kingdoms);
          });
      });
  }

  populate(character) {
    this.name = character[0];
    this.house = character[1];
    this.description = character[2];
    this.status = character[3];
  }

  updateCharacter(character) {
    character.push(this.name);
    character.push(this.house);
    character.push(this.description);
    character.push(this.status);
    this.service
      .updateCharacter(character)
      .then(response => {
        if (response === 'exception') {
          confirm('Please check the Input');
        }
        this.ngOnInit();
      });
  }

  createCharacter(character) {
    character.push(this.name);
    character.push(this.house);
    character.push(this.description);
    character.push(this.status);
    this.service
      .createCharacter(character)
      .then(response => {
        if (response === 'exception') {
          confirm('Please check the entered values: Either the character already exists or no such house exists');
        }
        this.ngOnInit();
      });
  }

  deleteCharacter(name) {
    this.service.deleteCharacter(name)
      .then(() => this.ngOnInit());
  }

  filter(house, kingdom, status) {
    if (house === 'Select a House' && kingdom === 'Select a Kingdom' && status === 'Select Dead/Alive') {
      return;
    } else if (house !== 'Select a House' && kingdom === 'Select a Kingdom' && status === 'Select Dead/Alive') {
      this.getCharactersForHouse(house);
    } else if (house === 'Select a House' && kingdom !== 'Select a Kingdom' && status === 'Select Dead/Alive') {
      this.getCharactersForKingdom(kingdom);
    } else if (house === 'Select a House' && kingdom === 'Select a Kingdom' && status !== 'Select Dead/Alive') {
      this.getCharactersDeadAlive(status);
    } else if (house !== 'Select a House' && kingdom !== 'Select a Kingdom' && status === 'Select Dead/Alive') {
      this.getCharactersForHouseForKingdom(house, kingdom);
    } else if (house !== 'Select a House' && kingdom === 'Select a Kingdom' && status !== 'Select Dead/Alive') {
      this.getCharactersForHouseDeadAlive(house, status);
    } else if (house === 'Select a House' && kingdom !== 'Select a Kingdom' && status !== 'Select Dead/Alive') {
      this.getCharactersForKingdomDeadAlive(kingdom, status);
    } else if (house !== 'Select a House' && kingdom !== 'Select a Kingdom' && status !== 'Select Dead/Alive') {
      this.getCharactersForHouseForKingdomDeadAlive(house, kingdom, status);
    }
  }

  getCharactersForHouse(house) {
    this.service.getCharactersForHouse(house)
      .then(characters => this.characters = characters);
  }

  getCharactersForKingdom(kingdom) {
    this.service.getCharactersForKingdom(kingdom)
      .then(characters => this.characters = characters);
  }

  getCharactersDeadAlive(status) {
    this.service.getCharactersDeadAlive(status)
      .then(characters => this.characters = characters);
  }

  getCharactersForHouseForKingdom(house, kingdom) {
    this.service.getCharactersForHouseForKingdom(house, kingdom)
      .then(characters => this.characters = characters);
  }

  getCharactersForHouseDeadAlive(house, status) {
    this.service.getCharactersForHouseDeadAlive(house, status)
      .then(characters => this.characters = characters);
  }

  getCharactersForKingdomDeadAlive(kingdom, status) {
    this.service.getCharactersForKingdomDeadAlive(kingdom, status)
      .then(characters => this.characters = characters);
  }

  getCharactersForHouseForKingdomDeadAlive(house, kingdom, status) {
    this.service.getCharactersForHouseForKingdomDeadAlive(house, kingdom, status)
      .then(characters => this.characters = characters);
  }

}
