import { MastermoduleModule } from './module/mastermodule/mastermodule.module';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
//import { EmployeeModule } from './module/employee/employee.module';
import { HomeComponent } from './home/home.component';
//import { OperationexecutiveModule } from './module/operationexecutive/operationexecutive.module';
//import { CreditmanagerModule } from './module/creditmanager/creditmanager.module';
//import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';

// import { ProductModule } from './module/product/product.module';
import { LoancalculatorComponent } from './loancalculator/loancalculator.component';
//import { CustomerModule } from './module/customer/customer.module';
//import { BankemployeeregModule } from './module/bankemployeereg/bankemployeereg.module';
//import { CustomerexecutiveModule } from './module/customerexecutive/customerexecutive.module';
// import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaQComponent } from './fa-q/fa-q.component';
import { AboutusComponent } from './aboutus/aboutus.component';
//import { EmploginComponent } from './emplogin/emplogin.component';
//import { DocumentcontrolModule } from './module/documentcontrol/documentcontrol.module';
//import { OperationheadModule } from './module/operationhead/operationhead.module';
//import { AccountheadModule } from './module/accounthead/accounthead.module';
import { DeligenceOfficerModule } from './module/deligence-officer/deligence-officer.module';
import { SalesExecutiveModule } from './module/sales-executive/sales-executive.module';
import { OperationalExecutiveModule } from './module/operational-executive/operational-executive.module';
import { BranchManagerModule } from './module/branch-manager/branch-manager.module';
import { AccountsManagerModule } from './module/accounts-manager/accounts-manager.module';
import { TelecommunicationModule } from './module/telecommunication/telecommunication.module';


export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path:"log",component:LoginComponent
  },
  // {
  //   path:"emplogin",component:EmploginComponent
  // },
  {
    path:"loancalci",component:LoancalculatorComponent
  },
  // {
  //   path:"enquiryform",component:EnquiryformComponent
  // },
  {
    path:"contactus",component:ContactusComponent
  },
  {
    path:"faq",component:FaQComponent
  },
  {
    path:"aboutus",component:AboutusComponent
  },
  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
      //Unused Module
      {path: 'admin', loadChildren: () => MastermoduleModule},
      // {path: 'emp', loadChildren: () => EmployeeModule},
      // {path:'operation',loadChildren:()=>OperationexecutiveModule},
      // {path:'cr',loadChildren:()=>CreditmanagerModule},
      // {path:'relation',loadChildren:()=>RelationexecutiveModule},
      // {path:'product',loadChildren:()=>ProductModule},

      //Aamche Modules
      {
        path:'do', loadChildren:()=>DeligenceOfficerModule
      },
      {
        path:'se', loadChildren:()=>SalesExecutiveModule
      },
      {
        path: 'oe', loadChildren: ()=>OperationalExecutiveModule
      },
      {
        path: 'bm', loadChildren: ()=>BranchManagerModule
      },
      {
        path: 'am', loadChildren: ()=>AccountsManagerModule
      },
      {
        path: 'tc', loadChildren: ()=>TelecommunicationModule
      }

    //   //Team II Component
    //   {path:'customer',loadChildren:()=>CustomerModule},
    //   {path:'employee',loadChildren:()=>BankemployeeregModule},
    //   {path:'registration', loadChildren:()=>CustomerexecutiveModule },
    //   {path:'dc', loadChildren:()=>CustomerexecutiveModule },
    //   {path:'bankempreg', loadChildren:()=>BankemployeeregModule},  //Bank Employee Registraion
    //   // {path:'customerenquiry', loadChildren:()=>CustomerModule}   //Customer Enquiry
    //   {path:'doc', loadChildren:()=>DocumentcontrolModule},
    //   {path:'oh', loadChildren:()=>OperationheadModule},
    //   {path:'cm', loadChildren:()=>CreditmanagerModule},
    //   {path:'ah', loadChildren:()=>AccountheadModule},
     ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];



