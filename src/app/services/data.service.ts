import { Injectable, OnInit } from '@angular/core';
import {Restaruant} from '../Interfaces/restaruant';
import { MyHttpService } from './http.service';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import { RestaruantResponse } from '../Interfaces/restaruant-response';
declare const google: any;


@Injectable()
export class DataService implements OnInit {
  private restaruantArray: Restaruant[] = [];
  private enteredCity = null;
  public listOfSuggestedCities = [];
  private cityData;
  suggestionsChosenCity; // This object should supply the city ID
  searchRouteTaken: string;
  listOfRestaruants;
  place;




  constructor(private myhttp: MyHttpService) {

  }
  ngOnInit() {

  }

  findPlaceFromQueryRequest(suppliedQuery: string, callBack) {
    const mapCenter = new google.maps.LatLng(-33.8617374, 151.2021291);
    const map = new google.maps.Map(document.createElement('div'));
    const request = {
      query: suppliedQuery,
      fields: ['photos', 'place_id', 'formatted_address', 'name', 'geometry', 'icon'],
    };
    const service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, callBack);
  }

  findPlaceDetails(place_id: string, callBack) {
    const mapCenter = new google.maps.LatLng(-33.8617374, 151.2021291);
    const map = new google.maps.Map(document.createElement('div'));
    const request = {
     placeId: place_id,
      fields: ['photo', 'name'],
    };
    const service = new google.maps.places.PlacesService(map);
    service.getDetails(request, callBack);
  }


  callBack (results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        this.place = results[i];
        console.log(results[i]);
      }
    }
  }

  initializeCities() {
    if (this.enteredCity !== '' || this.enteredCity !== null) {
      console.log('making API call');

      }  else {
        console.log('No valid city name was entered! Please try again..');
        return undefined;
      }
    }
    fetchRestaruantsByCityID() {
      const count = 20; // how many results we want which will end up in our storage array
      const startAfterNumber = 0;  // offset parameter
        return this.myhttp.getRestaruantsByCityId(
          this.suggestionsChosenCity.id, startAfterNumber, count);
    }


    makeCityApiCall() {
      return this.myhttp.getCityFromServer(this.enteredCity);
    }

    subscribeToCityArray(cityArrayPlaceHolder: any[]) {
      this.cityData.subscribe(
        (data: any[]) => {
          cityArrayPlaceHolder = data['location_suggestions'];
        },
          err => {
            console.log(err);
            // closeLoadingBar();
        },
          () => {
            console.log('observable has finished');
        }
      );
    }


  searchPlaceApiCall() {
    this.myhttp.sendGooglePlaceSearchRequest('Brasil Montrose').subscribe(
      (response: any) => {
        console.log(response);
      },
      (err) => console.log(err)
    );
  }



  getRestaruantArray () {
    return this.restaruantArray;
  }
  setEnteredCity(city: string) {
    this.enteredCity = city;
  }
  getEnteredCity() {
    return this.enteredCity;
  }
}
