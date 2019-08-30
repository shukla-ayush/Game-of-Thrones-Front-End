import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CharacterServiceClient} from '../services/characters.service';
import {AnimalServiceClient} from '../services/animals.service';

@Component({
  selector: 'app-characters',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor(private characterService: CharacterServiceClient,
              private service: AnimalServiceClient,
              private router: Router) { }

  animals;
  animal = [];
  name;
  master;
  status;
  selected_master;
  selected_status;
  characters;

  ngOnInit() {
    this.name = null;
    this.master = null;
    this.status = null;
    this.animal = [];
    this.selected_master = 'Select a Master';
    this.selected_status = 'Select Dead/Alive';
    this.service.findAllAnimals()
      .then(animals => {
        this.animals = animals;
        this.characterService.findAllCharacters()
          .then(characters => this.characters = characters);
      });
  }

  populate(animal) {
    this.name = animal[0];
    this.master = animal[1];
    this.status = animal[2];
  }

  updateAnimal(animal) {
    animal.push(this.name);
    animal.push(this.master);
    animal.push(this.status)
    this.service
      .updateAnimal(animal)
      .then(response => {
        if (response === 'exception') {
          confirm('Please check the Input');
        }
        this.ngOnInit();
      });
  }

  createAnimal(animal) {
    animal.push(this.name);
    animal.push(this.master);
    animal.push(this.status);
    this.service
      .createAnimal(animal)
      .then(response => {
        if (response === 'exception') {
          confirm('Please check the entered values: Either the animal already exists or no such master exists');
        }
        this.ngOnInit();
      });
  }

  deleteAnimal(name) {
    this.service.deleteAnimal(name)
      .then(() => this.ngOnInit());
  }

  filter(master, status) {
    if (master === 'Select a Master' && status === 'Select Dead/Alive') {
      return;
    } else if (master !== 'Select a Master' && status === 'Select Dead/Alive') {
      this.getAnimalsForMaster(master);
    } else if (master === 'Select a Master' && status !== 'Select Dead/Alive') {
      this.getAnimalsDeadAlive(status);
    } else if (master !== 'Select a Master' && status !== 'Select Dead/Alive') {
      this.getAnimalsForMasterDeadAlive(master, status);
    }


  }

  getAnimalsForMaster(master) {
    this.service.getAnimalsForMaster(master)
      .then(animals => this.animals = animals);
  }

  getAnimalsDeadAlive(status) {
    this.service.getAnimalsDeadAlive(status)
      .then(animals => this.animals = animals);
  }

  getAnimalsForMasterDeadAlive(master, status) {
    this.service.getAnimalsForMasterDeadAlive(master, status)
      .then(animals => this.animals = animals);
  }

}
