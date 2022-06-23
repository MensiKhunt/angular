import { Component, Inject, OnInit, Optional } from '@angular/core';
import { Subject } from '../form/form.model';
import { NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
// form =  new Subject()
   //data = new Student()
   myProp: string;
 // fromPage: any;
 // fromMarks: any;
  constructor(
    private dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){}
     

  ngOnInit(): void {
    console.log(this.data);
  //va= this.data;
  }

  // addsubject(){
  //   this.data.subAry.push(new Subject());
  // }
}
