import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { NopageComponent } from './nopage/nopage.component';
import { Practice1Component } from './practice1/practice1.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path:'add',
    component:ProjectComponent
  },
  {
    path:'view',
    component:ListComponent
  },
  {
    path:'update/:id',
    component:EditComponent

  }
  // {
  //   path:'**',
  //   component:NopageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
