import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Student, Subject } from '../form/form.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
//import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  data: Student[];
  x: any;
  age:any;


  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService, private dialog: MatDialog) {
    this.route.params.subscribe(data => {
      //console.log(data)
    });

    
  }

  ngOnInit(): void {
    this.getEmployee();
    //  this.data=JSON.parse(localStorage.getItem('formsdata') as any);
  }

  agecalc(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }
  private getEmployee() {
    this.employeeService.getEmployeeList().subscribe(data1 => {
      this.data = data1;
    })
  }
  updateEmployee(id: number) {

    // this.router.navigate(['update',id])
    if (id) {
      this.router.navigate(['/form'], { queryParams: { id: id } });
    }
    else {
      this.router.navigate(['/form']);
    }
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployee();
    })
  }

  employeeDetails(id: number) {this.x
    this.router.navigate(['details', id])
  }

  viewSubject(subject) {
    this.dialog.open(DialogComponent, {
      data: subject
    });
  }

   
}





