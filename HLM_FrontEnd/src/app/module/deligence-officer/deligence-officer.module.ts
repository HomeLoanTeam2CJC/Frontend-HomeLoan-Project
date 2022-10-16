import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialCheckComponent } from './financial-check/financial-check.component';
import { RouterModule, Routes } from '@angular/router';
import { FieldInvestigationComponent } from './field-investigation/field-investigation.component';
import { TechnicalCheckComponent } from './technical-check/technical-check.component';
import { LegalCheckComponent } from './legal-check/legal-check.component';
import { DoApplicationUpdateComponent } from './do-application-update/do-application-update.component';
import { DoApplicationListComponent } from './do-application-list/do-application-list.component';

const deligencerouting: Routes = [
  {
    path: "financial-check", component:FinancialCheckComponent
  },
  {
    path: "field-investigation", component: FieldInvestigationComponent
  },
  {
    path: 'technical-check', component: TechnicalCheckComponent
  },
  {
    path: 'legal-check', component: LegalCheckComponent
  },
  {
    path: 'do-application-list', component: DoApplicationListComponent
  },
  {
    path: 'do-application-update', component: DoApplicationUpdateComponent
  }

]

@NgModule({
  declarations: [FinancialCheckComponent, FieldInvestigationComponent, TechnicalCheckComponent, LegalCheckComponent, DoApplicationUpdateComponent, DoApplicationListComponent],
  imports: [
    CommonModule,RouterModule.forChild(deligencerouting)
  ],
  exports:[FinancialCheckComponent,
    FieldInvestigationComponent, TechnicalCheckComponent, LegalCheckComponent,
    DoApplicationUpdateComponent, DoApplicationListComponent]
})
export class DeligenceOfficerModule { }
