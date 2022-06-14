
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Router,Route, ActivatedRoute } from '@angular/router'
import { Student } from './form.model';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // employee = {
  //   id: "",
  //   name: "",
  //   address: "",
  //   gender: "",
  //   cars: "",
  //   doj: "",
  //   hobbies: ""
  //}
  // editMode : any = true;
  // employees: any[] = [];
  // myForm: any;
  x : any;
  myfrm: FormGroup;
  // CountryData: Array<any> = [
  //   { name: 'IND', value: 'India' },
  //   { name: 'AUS', value: 'Australia' },
  //   { name: 'USA', value: 'America' },
  //   { name: 'RUS', value: 'Rusia' },
  //   { name: 'ENG', value: 'England' }
  // ];
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

  ]



  editid: any;
  model = new Student();


  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
      this.myfrm = this.fb.group({
        checkArray: this.fb.array([])
      })
    this.route.params.subscribe((data: any) => {
      if (data && data.id) {
        this.editid = Number(data.id);
        console.log(this.editid);
      }
     
    });
    // if (this.employee && this.employee.id) {
    //   this.editid = Number(this.employee.id)
    //   console.log(this.employee)
     
    //}
    //console.log(this.employees)
  }
  // onCheckboxChange(e : any) {
  //   const checkArray: FormArray = this.myfrm.get('checkArray') as FormArray;
  
  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } 
  //   else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item: any, FormControl) => {
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

  ngOnInit(): void {
    if (this.editid) {
      let jsonarray = JSON.parse(localStorage.getItem('formsdata'));
      if (jsonarray) {
        let object = jsonarray.find(((x: { id: number, }) => x.id == this.editid));
        if (object) {
          this.model = object;
        }
       }
    } 
  }
  onSubmit() {
    // const selected = this.checkboxJson.filter(p => p.checked).map(x=>x.label);
    // console.log(selected)
    // const s: string= selected.join(',');
    // console.log(s);
    if(this.editid)
    {
   
      // this if section execute for edit record 
      let editobject = JSON.parse(localStorage.getItem('formsdata') as any);
      const selected = this.checkboxJson.filter(p => p.checked).map(x=>x.label);
      this.model.hobbies = selected.join(',')
      let i = editobject.findIndex((x: { id: any; })=>x.id === this.editid);
      editobject[i]= this.model;
      localStorage.setItem('formsdata',JSON.stringify(editobject));
    }
    else {
      //this else section execute for save data only section 
      const selected = this.checkboxJson.filter(p => p.checked).map(x=>x.label);
      console.log(selected);
    let jsonArray = JSON.parse(localStorage.getItem('formsdata')as any)
    if(!jsonArray){
      jsonArray=[];

    }
    this.model.id = Math.floor(Math.random()*100)
    this.model.hobbies = selected.join(',')
    jsonArray.push(this.model)
    var  x = localStorage.setItem('formsdata', JSON.stringify(jsonArray));
    console.log(x);
    }
  //  console.log(this.myfrm.value)
     // this.employees = [...this.employees, this.employee];
    // this.employee = { id: '', name: '', address: '', gender: '', cars: '', doj: '', hobbies: '' };
    // localStorage.setItem('formsdata', JSON.stringify(this.employees));
  
  }
  showdata() {
    this.router.navigateByUrl('/list');
    }
}
