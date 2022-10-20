import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmApplicationListComponent } from './bm-application-list/bm-application-list.component';
import { BmApplicationUpdateComponent } from './bm-application-update/bm-application-update.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewSanctionLetterComponent } from './view-sanction-letter/view-sanction-letter.component';


const bmroutes: Routes = [
{
  path: 'bm-application-list', component: BmApplicationListComponent,
  children:[
    {
      path:'bm-application-update/:customerId', component: BmApplicationUpdateComponent
    },
    {
      path: 'view-sanction-letter/:customerId', component: ViewSanctionLetterComponent
    }
  ]
}
]

@NgModule({
  declarations: [BmApplicationListComponent, BmApplicationUpdateComponent, ViewSanctionLetterComponent],
  imports: [
    CommonModule, RouterModule.forChild(bmroutes), ReactiveFormsModule, FormsModule
    
  ],
  exports: [
    BmApplicationListComponent, BmApplicationUpdateComponent, ViewSanctionLetterComponent
  ]
})
export class BranchManagerModule { }
