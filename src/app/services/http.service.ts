import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SearcherService } from './searcher.service';
import { Observable } from 'rxjs';
import { RestaruantResponse } from '../Interfaces/restaruant-response';


@Injectable()
export class MyHttpService {
  private userApiKey = '675d1b0f7aab0c2f288952c5f22600c2';
  private googleApiKey = 'AIzaSyA63pRddL45_sYCFBAEKXoPt_tw0nr7KF0';
  private theCity = '';

  private cityUrl = 'https://developers.zomato.com/api/v2.1/cities?q=';

  private readyCityUrl = this.cityUrl + this.theCity;

  // Http can be called from anywhere and not only from a service like this one
  constructor(private http: HttpClient, private searcherSvc: SearcherService) {}


// 675d1b0f7aab0c2f288952c5f22600c2
  getTest() {
    const headers = new HttpHeaders()
             .set('Accept', 'application/json')
             .set('user-key', this.userApiKey)
             ;

    return this.http.get(this.readyCityUrl, { headers: headers });
  }
  getCityFromServer(city: string) {
    // param 'city' is going to come from the NgForm in the SearchBar component
    this.theCity = city;
    const headers = new HttpHeaders()
             .set('Accept', 'application/json')
             .set('user-key', this.userApiKey)
             ;
    return this.http.get<any []>((this.cityUrl + this.theCity),
    { headers: headers }).pipe(map(
      response => {
        // console.log(response['location_suggestions']);
        return response['location_suggestions'];
       }
    ));
  }

  getRestaruantsByCityId(cityId: number, count: number, startAfterNumber: number) {

    const baseRestaruantsUrl =
    `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&start=${count}&count=${startAfterNumber}`;
    const headers = new HttpHeaders()
             .set('Accept', 'application/json')
             .set('user-key', this.userApiKey)
             ;
    return this.http.get<any>((baseRestaruantsUrl),
    { headers: headers });
  }
  sendGooglePlaceSearchRequest(input) {
    const baseUrl = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?';

    const url =
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=place_id,photos,formatted_address,name,geometry&key=${this.googleApiKey}`;

    return this.http.get<any>(url);
  }

  getCity() {
    return this.theCity;
  }


  printToConsole() {
    console.log('HTTP Service');
  }
}
