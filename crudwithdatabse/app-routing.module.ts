import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {
    path:'list',
    component: ListComponent
  },
  {
    path:'form/:id',
    component: FormComponent
  },
  {
    path:'form',
    component: FormComponent
  },
  // {
  //   path:'update',
  //   component:UpdateComponent
  // },
   {
    path:'details/:id',
    component : DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
