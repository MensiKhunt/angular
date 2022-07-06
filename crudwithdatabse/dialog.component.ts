import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(  private dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    
    }
   
  
    deleteSubject(id:number) {
      this.employeeService.deleteSubject(id).subscribe(data => {
       console.log(data);
      // this.data = this.data.filter(x=>x.id !==id)
       const item = this.data.find(item => item.id === id);
     this.data.splice(this.data.indexOf(item));
      })
    }
  }

