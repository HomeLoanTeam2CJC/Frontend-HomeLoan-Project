import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemesComponent } from './schemes/schemes.component';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { EmiCalcComponent } from './emi-calc/emi-calc.component';
import { LoanApplicationFormComponent } from './loan-application-form/loan-application-form.component';
import { LoanApplicationListComponent } from './loan-application-list/loan-application-list.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerAcceptanceComponent } from './customer-acceptance/customer-acceptance.component';

const salesrouting: Routes = [
  {
    path: 'schemes', component:SchemesComponent
  },
  {
    path: 'enquiry-form', component: EnquiryFormComponent
  },
  { 
    path: 'enquiry-list', component: EnquiryListComponent
  },
  {
    path: 'loan-application-form', component: LoanApplicationFormComponent
  },
  {
    path: 'loan-application-list', component: LoanApplicationListComponent,
    children: [
      {
        path: 'customer-acceptance/:customerId', component: CustomerAcceptanceComponent
      }
    ]
  },
  {
    path: 'application-details', component: ApplicationDetailsComponent
  },
  {
    path: 'emi-calc', component: EmiCalcComponent
  }

  
];


@NgModule({
  declarations: [SchemesComponent, EnquiryFormComponent, EnquiryListComponent, EmiCalcComponent, LoanApplicationFormComponent, LoanApplicationListComponent, ApplicationDetailsComponent, CustomerAcceptanceComponent],
  imports: [
    CommonModule, RouterModule.forChild(salesrouting), ReactiveFormsModule, FormsModule
  ],
  exports:[
    SchemesComponent,
    EnquiryFormComponent, EnquiryListComponent, EmiCalcComponent, LoanApplicationFormComponent, LoanApplicationListComponent, ApplicationDetailsComponent, CustomerAcceptanceComponent
  ]
})
export class SalesExecutiveModule { }
