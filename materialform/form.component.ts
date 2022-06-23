import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray, FormControl } from '@angular/forms';
import { Student, Subject } from './form.model';
import { Router, ActivatedRoute } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
  model = new Student();
form = new Subject();
  editid: any;
  dialogInput!: string;
  dialogOutput! : string;
  sendValue: any;
  marksValue: any;
  dialogValue: any;
  maxValue: any;

  // adminForm = this.fb.group({
  //   subject: new FormControl('', [Validators.required]),
  //   mark: new FormControl('', [Validators.required]),
  // });

  // companyForm = this.fb.group({
  //    admins: this.fb.array([])
  //  })

  

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {
    this.route.params.subscribe((data: any) => {
      if (data && data.id) {
        this.editid = Number(data.id);
        console.log(this.editid);
      } 
    });
  }

    addsubject(){
      this.model.subAry.push(new Subject());
    }

     removesubject(index : number){
      this.model.subAry.splice(index,1);
     }


    // openDialog() : void{

    //   // const dialogRef = this.dialog.open(DialogComponent,{
    //   //   width : '250px',
    //   //   backdropClass : 'custom-dialog-backdrop-class',
    //   //   panelClass : 'custom-dialog-panel-class',
    //   //   data: { pageValue : this.sendValue, dotValue: this.marksValue}
    //   // })
    //   // dialogRef.afterClosed().subscribe(result =>{
    //   //   this.dialogValue = result.data;
    //   //   this.maxValue= result.data;
    //   // });
    // //  this.dialog.open(DialogComponent);
    //   let dailogRef = this.dialog.open(DialogComponent);
    //   let dr = this.dialog.open(DialogComponent)
    //  // dailogRef.componentInstance.myProp = this.form.subject;
    // dailogRef.componentInstance.myProp=this.dialogInput;
    // dr.componentInstance.myProp= this.dialogOutput;
    // }

    openSnackBar() {
      this._snackBar.open("Data Saved Successfully");
    }

    ngOnInit(): void {
      if (this.editid) {
        let jsonarray = JSON.parse(localStorage.getItem('formsdata') as any);
        if (jsonarray) {
          let object = jsonarray.find(((x: { id: number, }) => x.id == this.editid));
          if (object) {
            this.model = object;
          }
         }
      } 
    }
    

    //  get admins() {
    //    return this.companyForm.controls["admins"] as FormArray;
    // }
 

  onSubmit(){

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
 }
 
  showdata() {
    this.router.navigate(['/list']);
  
    }


}
