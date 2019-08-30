export class KingdomServiceClient {

  URL = 'http://localhost:5000';

  findAllKingdoms() {
    return fetch(this.URL + '/kingdoms')
      .then(response => response.json());
  }


  createKingdom(kingdom) {
    return fetch(this.URL + '/kingdoms', {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(kingdom),
      method: 'post'
    }).then(respose => respose.json());
  }

  updateKingdom(kingdom) {
    return fetch(this.URL + '/kingdoms', {
      body: JSON.stringify(kingdom),
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteKingdom(name) {
    return fetch(this.URL + '/kingdoms/' + name, {
      method: 'delete'
    }).then(respose => respose.json());
  }
}
