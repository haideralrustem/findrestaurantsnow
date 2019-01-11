import { Injectable } from '@angular/core';

@Injectable()
export class SearcherService {
    private searchCity: string;

    constructor() {}

    getSearchCity() {
      return this.searchCity;
    }
    setCity(city: string) {
      this.searchCity = city;
    }
}
