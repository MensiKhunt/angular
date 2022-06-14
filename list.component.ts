import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Student } from '../form/form.model';
//import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // emp:any;
  // employee1 : any;
  // id: any;
  // editMode  : any=false;
  // employees: any[];
  // employee: { id: string; name: string; address: string; gender: string; cars: string; doj: string; hobbies: string; };
  data: Student[];
  x: any;

   
  constructor(private router:Router,private route : ActivatedRoute) {
    this.route.params.subscribe(data=>{
      //console.log(data)
    }); 
    
    // this.x = JSON.parse(localStorage.getItem('checkbox'));
    // console.log(this.x);
    //   // if(this.emp && this.emp.id){
      //   this.editid = Number(this.emp.id)     
      //   }
   }
 
  ngOnInit(): void {
 
    this.data=JSON.parse(localStorage.getItem('formsdata') as any);
  }
 
  delete(i:number){
    this.data.splice(i,1);
    localStorage.setItem('formsdata',JSON.stringify(this.data))
  }

  edit(id:any){
   this.router.navigate(['/form',id])
  //JSON.parse(localStorage.getItem('formsdata') as any);
  //  if(this.editid){
  //    let jsonarray = JSON.parse(localStorage.getItem('formsdata'));
  //   if(jsonarray){
  //      let obj = jsonarray.find((x: {id : number,})=>x.id==this.editid)
  //     if(obj){
  //       this.employee=obj; 
  //     }}
  //   }
    

}

}
 
 

  
 
 
 
 




