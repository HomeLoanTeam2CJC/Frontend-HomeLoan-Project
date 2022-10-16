import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmApplicationListComponent } from './am-application-list/am-application-list.component';
import { DisbursementFormComponent } from './disbursement-form/disbursement-form.component';
import { LedgerTotalListComponent } from './ledger-total-list/ledger-total-list.component';
import { LedgerDefaulterListComponent } from './ledger-defaulter-list/ledger-defaulter-list.component';
import { RouterModule, Routes } from '@angular/router';

const amroutes: Routes = [
  {
    path: 'am-application-list', component: AmApplicationListComponent
  },
  {
    path: 'disbursement-form', component: DisbursementFormComponent
  },
  {
    path: 'ledger-total-list', component: LedgerTotalListComponent
  },
  {
    path: 'ledger-defaulter-list', component: LedgerDefaulterListComponent
  }

]

@NgModule({
  declarations: [AmApplicationListComponent, DisbursementFormComponent, LedgerTotalListComponent, LedgerDefaulterListComponent],
  imports: [
    CommonModule, RouterModule.forChild(amroutes)
  ],
  exports: [
    AmApplicationListComponent, DisbursementFormComponent, LedgerTotalListComponent, LedgerDefaulterListComponent
  ]
})
export class AccountsManagerModule { }
