import { Component, OnInit } from '@angular/core';
import { Router,Route, ActivatedRoute } from '@angular/router'
import { Student, Subject} from './form.model';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  x : any;
  myfrm: FormGroup;

  checkboxJson = [
    {
      id: 'Sports',
      label : 'Cricket',
      checked: false
    },
    {
      id: 'Club',
      label : 'Dance',
      checked: false
    },
    {
      id: 'Games',
      label : 'Chess',
      checked: false
    },
    {
      id: 'Fun Blast',
      label : 'Bowling',
      checked: false
    },
    {
      id: 'Masti',
      label : 'Go Carting',
      checked: false
    },

  ]
  eid:number;
  editid: any;
  form =  new Subject();
  subject = new Subject();
  id: any; 
  employee : Student = new Student();
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,) {
  
  }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    if (this.id) {
      this.employeeService.getEmployeeById(this.id).subscribe((response:any) => {
        console.log(response);
        const hobbyAry = response.hobbies.split(',');
        for (let i = 0; i < hobbyAry.length; i++) {
          const index = this.checkboxJson.findIndex(p => p.label == hobbyAry[i]);
          if (index != -1 ) {
            this.checkboxJson[index].checked = true;
          }
        }
        this.employee = response;
      });
    }
  }  

  saveEmployee(){
    const selected = this.checkboxJson.filter(p => p.checked).map(x => x.label);
    this.employee.hobbies = selected.join(',')
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.showdata();  
    },
    error=>console.log(error))
  }

  onSubmit() {
    this.saveEmployee();
  }

  showdata() {
    this.router.navigate(['/list']);
  }

  addsubject(){
    this.employee.subject.push(new Subject());
  }

  removesubject(index:number){
    this.employee.subject.splice(index,1);
  }
  

}
 

