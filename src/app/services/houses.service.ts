export class HouseServiceClient {

  URL = 'http://localhost:5000';

  findAllHouses() {
    return fetch(this.URL + '/houses')
      .then(response => response.json());
  }


  createHouse(house) {
    return fetch(this.URL + '/houses', {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(house),
      method: 'post'
    }).then(respose => respose.json());
  }


  updateHouse(house) {
    return fetch(this.URL + '/houses', {
      body: JSON.stringify(house),
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }


  deleteHouse(name) {
    return fetch(this.URL + '/houses/' + name, {
      method: 'delete'
    });
  }

  filterServiceKingdom(kingdom) {
    return fetch(this.URL + '/kingdom_houses/' + kingdom)
      .then(response => response.json());
  }
}
