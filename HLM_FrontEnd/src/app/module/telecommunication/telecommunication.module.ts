import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcDefaulterListComponent } from './tc-defaulter-list/tc-defaulter-list.component';
import { RouterModule, Routes } from '@angular/router';

const tcroutes : Routes = [
  {
    path: 'tc-defaulter-list', component: TcDefaulterListComponent
  }
]

@NgModule({
  declarations: [TcDefaulterListComponent],
  imports: [
    CommonModule, RouterModule.forChild(tcroutes)
  ],
  exports: [
    TcDefaulterListComponent
  ]

})
export class TelecommunicationModule { }
