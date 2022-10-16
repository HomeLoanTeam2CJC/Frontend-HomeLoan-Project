import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmApplicationListComponent } from './bm-application-list/bm-application-list.component';
import { BmApplicationUpdateComponent } from './bm-application-update/bm-application-update.component';
import { RouterModule, Routes } from '@angular/router';

const bmroutes: Routes = [
{
  path: 'bm-application-list', component: BmApplicationListComponent
},
{
  path: 'bm-application-update', component: BmApplicationUpdateComponent
}
]

@NgModule({
  declarations: [BmApplicationListComponent, BmApplicationUpdateComponent],
  imports: [
    CommonModule, RouterModule.forChild(bmroutes)
    
  ],
  exports: [
    BmApplicationListComponent, BmApplicationUpdateComponent
  ]
})
export class BranchManagerModule { }
