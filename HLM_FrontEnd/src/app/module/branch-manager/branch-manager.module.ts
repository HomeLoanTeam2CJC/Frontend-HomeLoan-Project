import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmApplicationListComponent } from './bm-application-list/bm-application-list.component';
import { BmApplicationUpdateComponent } from './bm-application-update/bm-application-update.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const bmroutes: Routes = [
{
  path: 'bm-application-list', component: BmApplicationListComponent,
  children:[
    {
      path:'bm-application-update/:customerId', component: BmApplicationUpdateComponent
    }
  ]
}
]

@NgModule({
  declarations: [BmApplicationListComponent, BmApplicationUpdateComponent],
  imports: [
    CommonModule, RouterModule.forChild(bmroutes), ReactiveFormsModule, FormsModule
    
  ],
  exports: [
    BmApplicationListComponent, BmApplicationUpdateComponent
  ]
})
export class BranchManagerModule { }
