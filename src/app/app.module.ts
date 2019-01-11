import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatIconModule, MatInputModule,
  MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule
} from '@angular/material';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { MyHttpService } from './services/http.service';
import { HttpModule } from '@angular/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SearcherService } from './services/searcher.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalSuggestionsComponent } from './modal-suggestions/modal-suggestions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { AgmCoreModule } from '@agm/core';
import { FeaturedPlacesComponent } from './featured-places/featured-places.component';




@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    HomeComponent,
    SearchbarComponent,
    ModalSuggestionsComponent,
    FeaturedPlacesComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA63pRddL45_sYCFBAEKXoPt_tw0nr7KF0',
      libraries: ['places']
    }),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatListModule,
    ModalDialogModule.forRoot(),


    RouterModule.forRoot([
      {path: 'results', component: ResultsComponent},
      {path: 'home', component: HomeComponent},
    ])
  ],
  providers: [MyHttpService, DataService, HttpClient, SearcherService],
  bootstrap: [AppComponent],
  entryComponents: [ModalSuggestionsComponent]
})
export class AppModule { }
