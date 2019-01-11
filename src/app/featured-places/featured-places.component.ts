import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-places',
  templateUrl: './featured-places.component.html',
  styleUrls: ['./featured-places.component.css']
})
export class FeaturedPlacesComponent implements OnInit {
  carouselPlaces = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
