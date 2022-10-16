import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditScoreComponent } from './credit-score/credit-score.component';
import { RouterModule, Routes } from '@angular/router';
import { OeEnquiryListComponent } from './oe-enquiry-list/oe-enquiry-list.component';


const oeroutes: Routes = [
  {
    path: 'credit-score', component: CreditScoreComponent
  },
  {
    path: 'oe-enquiry-list', component: OeEnquiryListComponent
  }
]


@NgModule({
  declarations: [CreditScoreComponent, OeEnquiryListComponent],
  imports: [
    CommonModule, RouterModule.forChild(oeroutes)
  ],
  exports: [
    CreditScoreComponent, OeEnquiryListComponent
  ]
})
export class OperationalExecutiveModule { }
