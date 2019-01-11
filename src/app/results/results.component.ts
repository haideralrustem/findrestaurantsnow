import { Component, OnInit, OnChanges } from '@angular/core';

import { Restaruant } from '../Interfaces/restaruant';
import { DataService} from '../services/data.service';
import { MyHttpService } from '../services/http.service';
import { Observable, Subject } from 'rxjs';
declare const google: any;



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges {


  restaruantList: Restaruant[] = [];
  resultsRemaining = true;
  private city;
  chosenCity;
  private placeQuery;
  private resultsCount: number;  // This is the same as count parameter for the get url
  cities = this.dataSvc.makeCityApiCall();
  googlePlacesResults;  // used to store findPlaceFromQuery results
  placeGooglePhotos = Array(10).fill(4);


  // For some reason, putting private was essential
  constructor(private dataSvc: DataService,
     private myhttp: MyHttpService) {
  }
  // Mock list
  listOfRestaurants: any[];

  ngOnInit() {
     /* this.dataSvc.findPlaceFromQueryRequest('Brasil Cafe Montrose Houston',
      function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            this.googlePlacesResults = results;
            console.log(this.googlePlacesResults);
            this.dataSvc.findPlaceDetails(this.googlePlacesResults[0]['place_id'],
            function (place, status2) {
                console.log(place);
                console.log(place['photos'][0].getUrl());
                this.placeGooglePhotos = place['photos'];

            }.bind(this));
        }
      }.bind(this));   */


     // this.dataSvc.findPlaceDetails();

      // check which search route the user took (searched through city or restaruant?)
     /* if ( this.dataSvc.searchRouteTaken === 'city') {
          // send API request using city
          const cityId = this.dataSvc.suggestionsChosenCity.id;
          console.log(this.dataSvc.suggestionsChosenCity.id);

           // this will result in dataSvc.listOfRestaurants having a value
          this.dataSvc.fetchRestaruantsByCityID().subscribe(
            (response) => {
              console.log(Object.keys(response));
              console.log(response['results_found']);
              console.log(response['restaurants']);
              this.listOfRestaurants = response['restaurants'];
              for (let i = 0; i < this.listOfRestaurants.length; i++) {
                  console.log(this.listOfRestaurants[i]['restaurant']);
              }

            }
          );
          setTimeout(() => console.log(this.listOfRestaurants), 2000);

      }  */


  }
  ngOnChanges() {

  }

  callBack (results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {

      for (let i = 0; i < results.length; i++) {

        console.log(results[i]);
      }
    }
  }

}

