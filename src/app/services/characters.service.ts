export class CharacterServiceClient {

  URL = 'http://localhost:5000';

  findAllCharacters() {
    return fetch(this.URL + '/characters')
      .then(response => response.json());
  }


  createCharacter(character) {
    console.log(character)
    return fetch(this.URL + '/characters', {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(character),
      method: 'post'
    }).then(respose => respose.json());
  }

  updateCharacter(character) {
    return fetch(this.URL + '/characters', {
      body: JSON.stringify(character),
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteCharacter(name) {
    return fetch(this.URL + '/characters/' + name, {
      method: 'delete'
    });
  }

  getCharactersForHouse(house) {
    return fetch(this.URL + '/characters_for_house/' + house)
      .then(response => response.json());
  }

  getCharactersForKingdom(kingdom) {
    return fetch(this.URL + '/characters_for_kingdom/' + kingdom)
      .then(response => response.json());
  }

  getCharactersDeadAlive(status) {
    return fetch(this.URL + '/characters_dead_alive/' + status)
      .then(response => response.json());
  }

  getCharactersForHouseForKingdom(house, kingdom) {
    return fetch(this.URL + '/characters_for_house_for_kingdom/' + house + '/' + kingdom)
      .then(response => response.json());
  }

  getCharactersForHouseDeadAlive(house, status) {
    return fetch(this.URL + '/characters_for_house_dead_alive/' + house + '/' + status)
      .then(response => response.json());
  }

  getCharactersForKingdomDeadAlive(kingdom, status) {
    return fetch(this.URL + '/characters_for_kingdom_dead_alive/' + kingdom + '/' + status)
      .then(response => response.json());
  }

  getCharactersForHouseForKingdomDeadAlive(house, kingdom, status) {
    return fetch(this.URL + '/characters_for_house_for_kingdom_dead_alive/' + house + '/' + kingdom + '/' + status)
      .then(response => response.json());
  }


}
