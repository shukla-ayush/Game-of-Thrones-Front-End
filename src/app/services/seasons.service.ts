export class SeasonServiceClient {

  URL = 'http://localhost:5000';

  finAllSeasons() {
    return fetch(this.URL + '/seasons')
      .then(response => response.json());
  }


  createSeason(season) {
    return fetch(this.URL + '/seasons', {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(season),
      method: 'post'
    }).then(respose => respose.json());
  }

  updateSeason(season) {
    return fetch(this.URL + '/seasons', {
      body: JSON.stringify(season),
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteSeason(num) {
    return fetch(this.URL + '/seasons/' + num, {
      method: 'delete'
    }).then(respose => respose.json());
  }
}
