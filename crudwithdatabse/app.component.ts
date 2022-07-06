import { AstMemoryEfficientTransformer, ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formlist';
  employee = {
    name : "",
    address : "",
    gender : "",
    doj :"",
    hobbies : ""
  }
  employees: any[] = [];
  myForm: any;
  storeData(){
    this.employees =[...this.employees,this.employee];
    this.employee={name : '',address:'',gender:'',doj:'',hobbies:''};
    localStorage.setItem('formsdata',JSON.stringify(this.employees));
    }
  remove(){
    localStorage.removeItem('employees');
  }
  reset(){
    this.myForm.reset();
  }
  
}
