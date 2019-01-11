import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {Router} from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-modal-suggestions',
  templateUrl: './modal-suggestions.component.html',
  styleUrls: ['./modal-suggestions.component.css']
})
export class ModalSuggestionsComponent implements OnInit {

  recievedData;

  constructor(private dialogRef: MatDialogRef<ModalSuggestionsComponent>,
    private dataSvc: DataService, private router: Router,
    @Inject(MAT_DIALOG_DATA) data) {
    this.recievedData = data;
  }

  ngOnInit() {
  }
  save() {
    this.dialogRef.close(true);
    console.log(this.recievedData);
    }
  chooseSuggestion(city) {
    // Assignment of the chosen city by user
    this.dataSvc.suggestionsChosenCity = city;
    console.log(this.dataSvc.suggestionsChosenCity);
    this.close();
    this.router.navigate(['results']);
  }

close() {
    this.dialogRef.close();
    }

}
