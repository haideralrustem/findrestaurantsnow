import { Component, OnInit } from '@angular/core';
import {Restaruant} from './Interfaces/restaruant';
import { MyHttpService } from './services/http.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalSuggestionsComponent } from './modal-suggestions/modal-suggestions.component';

declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(httpService: MyHttpService, private dialog: MatDialog) {
    httpService.printToConsole();
  }

  ngOnInit() {

  }



  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
      this.dialog.open(ModalSuggestionsComponent, dialogConfig);
  }
}
