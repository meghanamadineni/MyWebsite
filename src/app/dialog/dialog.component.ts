import {Component} from '@angular/core';
import {MatDialogRef, MatInputModule, MatDialogModule} from '@angular/material';
import {AppComponent} from '../app.component';

export namespace DialogExport{
  export var isDarkThemeDialog:boolean = false;
}
@Component({
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  isDarkTheme : boolean;

  ngOnInit() {
   var d = <HTMLElement>document.getElementsByClassName('mat-dialog-container')[0];
   if(!this.isDarkTheme){
    d.style.background = "#E91E63";
   }
   else{
    d.style.background="#03a9f4";
   }

  }
  
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {
    this.isDarkTheme = DialogExport.isDarkThemeDialog;
    
  }
  
}
