import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditScoreComponent } from './credit-score/credit-score.component';
import { RouterModule, Routes } from '@angular/router';
import { OeEnquiryListComponent } from './oe-enquiry-list/oe-enquiry-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const oeroutes: Routes = [
 
  {
    path: 'oe-enquiry-list', component: OeEnquiryListComponent,
    children:[
      {
        path: 'credit-score', component: CreditScoreComponent
      }
    ]
  }
]


@NgModule({
  declarations: [CreditScoreComponent, OeEnquiryListComponent],
  imports: [
    CommonModule, RouterModule.forChild(oeroutes), ReactiveFormsModule, FormsModule
  ],
  exports: [
    CreditScoreComponent, OeEnquiryListComponent
  ]
})
export class OperationalExecutiveModule { }
