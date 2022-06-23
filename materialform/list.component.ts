import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../form/form.model';
import {ActivatedRoute, Router} from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Subject } from '../form/form.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 
// data : Student[];
  data: Student[] = JSON.parse(localStorage.getItem('formsdata') as any);
  displayedColumns = ['name','gender','hobbies','address','country','doj','action']
 // dataSource = DataSource;
  i! : number;
  d!:  Subject[];
  
 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Student>(
    JSON.parse(localStorage.getItem('formsdata') as any)
  );
 
 
  constructor(private router:Router,
    private route : ActivatedRoute,
    private dialog: MatDialog) {
      this.route.params.subscribe((data)=>console.log(data))
     // this.dataSource = new MatTableDataSource(this.data);
     }

    // @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }

  ngOnInit(): void {
    // this.data=JSON.parse(localStorage.getItem('formsdata') as any);
    // this.dataSource = new MatTableDataSource<Student>(this.data);
   
  }


  delete(id){
    for(let i = 0; i < this.data.length; ++i){
      if (this.data[i].id === id) {
          this.data.splice(i,1);
      }
      this.data = this.data.slice();
  }
    localStorage.setItem('formsdata',JSON.stringify(this.data))
  }

  edit(id:any){
    this.router.navigate(['/form',id])
  }


  viewSubject(subAry: any) {
    this.dialog.open(DialogComponent, {
      data: subAry
    });
  }


  id : string;
  search(){
    let editobject = JSON.parse(localStorage.getItem('formsdata') as any);
    editobject.findIndex((x: { id: any; })=>x.id === this.id); 
    if(this.id == ""){
      this.ngOnInit();
    }
    else {
      this.data = this.data.filter(res=>{
        return res.id.toLocaleString().match(this.id.toLocaleString());
      })
    }
  }

  
  // OnPageChange(event:PageEvent){
  //     const startIndex = event.pageIndex * event.pageSize
  //     let endIndex = startIndex + event.pageSize;
  //     if(endIndex > this.data.length){
  //       endIndex = this.data.length;
  //     }
  //     this.data = this.data.slice(startIndex,endIndex)

  // console.log(event);
   
  // }

}
