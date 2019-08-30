export class EventServiceClient {

  URL = 'http://localhost:5000';

  findAllEvents() {
    return fetch(this.URL + '/events')
      .then(response => response.json());
  }


  createEvent(event) {
    return fetch(this.URL + '/events', {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(event),
      method: 'post'
    }).then(respose => respose.json());
  }

  updateEvent(event) {
    return fetch(this.URL + '/events', {
      body: JSON.stringify(event),
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteEvent(name) {
    return fetch(this.URL + '/events/' + name, {
      method: 'delete'
    });
  }

  filterServiceKingdom(kingdom) {
    return fetch(this.URL + '/kingdom_events/' + kingdom)
      .then(response => response.json());
  }

  filterServiceSeason(season) {
    return fetch(this.URL + '/season_events/' + season)
      .then(response => response.json());
  }

  filterServiceKingdomAndSeason(kingdom, season) {
    console.log(kingdom, season);
    return fetch(this.URL + '/kingdom_season_events/' + kingdom + '/' + season)
      .then(response => response.json());
  }
}
