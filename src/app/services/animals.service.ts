export class AnimalServiceClient {

  URL = 'http://localhost:5000';

  findAllAnimals() {
    return fetch(this.URL + '/animals')
      .then(response => response.json());
  }

  createAnimal(animal) {
    return fetch(this.URL + '/animals', {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(animal),
      method: 'post'
    }).then(respose => respose.json());
  }

  updateAnimal(animal) {
    return fetch(this.URL + '/animals', {
      body: JSON.stringify(animal),
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }


  deleteAnimal(name) {
    return fetch(this.URL + '/animals/' + name, {
      method: 'delete'
    });
  }

  getAnimalsForMaster(master) {
    return fetch(this.URL + '/animals_for_master/' + master)
      .then(response => response.json());
  }

  getAnimalsDeadAlive(status) {
    return fetch(this.URL + '/animals_dead_alive/' + status)
      .then(response => response.json());
  }

  getAnimalsForMasterDeadAlive(master, status) {
    return fetch(this.URL + '/animals_for_master_dead_alive/' + master + '/' + status)
      .then(response => response.json());
  }
}
