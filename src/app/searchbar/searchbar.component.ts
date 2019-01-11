import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';
import { MyHttpService } from '../services/http.service';
import { DataService } from '../services/data.service';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { ModalSuggestionsComponent } from '../modal-suggestions/modal-suggestions.component';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  private cityString: string;
  suggestedCitiesObservable;
  suggestedCities;


  @Output() cityEvent = new EventEmitter();

  formGroup = new FormGroup({
    queryField: new FormControl()
  });

  results: any[] = [];

  constructor(private router: Router, private dataSvc: DataService,
    private http: MyHttpService, private dialog: MatDialog,
    ) {}

  ngOnInit() {
    this.formGroup.valueChanges.subscribe( result => console.log(result.queryField));
  }


  goSearch() {
    this.router.navigate(['results']);
  }
  onSubmitSearch(form: NgForm) {
      const value = form.value;
      console.log(value.searchCity);
      this.dataSvc.setEnteredCity(value.searchCity);
      this.dataSvc.searchRouteTaken = 'city';
      this.suggestedCitiesObservable = this.dataSvc.makeCityApiCall();
      this.suggestedCitiesObservable.subscribe(
        (data: any[]) => {
          this.suggestedCities = data;
          this.openModal(this.suggestedCities);
        }
      );

      // this.goSearch();
 }

 openModal(passedData) {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = passedData;
    this.dialog.open(ModalSuggestionsComponent, dialogConfig);
 }

 clearForm(form: NgForm) {
   form.reset();
 }

}
