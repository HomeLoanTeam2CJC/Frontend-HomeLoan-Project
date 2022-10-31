import { Component, OnInit } from '@angular/core';
import { Menu } from 'app/model/menu';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [

    //Sales Executive Module
    { path: '/schemes',     title: 'Sales Executive : Schemes',         icon:'fa-solid fa-user',       class: '' },
    { path: '/enquiry-form',     title: 'Sales Executive : Enquiry Form',         icon:'nc-bank',       class: '' },
    { path: '/enquiry-list',     title: 'Sales Executive : Enquiry List',         icon:'nc-bank',       class: '' },
    { path: '/loan-application-form',     title: 'Sales Executive : Loan Application Form',         icon:'nc-bank',       class: '' },
    { path: '/loan-application-list',     title: 'Sales Executive : Loan Application List',         icon:'nc-bank',       class: '' },
    { path: '/application-details',     title: 'Sales Executive : Application Details',         icon:'nc-bank',       class: '' },
    { path: '/emi-calc',     title: 'Sales Executive : EMI Calculator',         icon:'nc-bank',       class: '' },
    { path: '/customer-acceptance',     title: 'Sales Executive : Customer Acceptance',         icon:'nc-bank',       class: '' },


    //Deligence Officer Module
    { path: '/financial-check',     title: 'Diligence Officer : Financial check',         icon:'nc-bank',       class: '' },
    { path: '/field-investigation',     title: 'Diligence Officer : Field Investigation',         icon:'nc-bank',       class: '' },
    { path: '/technical-check',     title: 'Diligence Officer : Technical check',         icon:'nc-bank',       class: '' },
    { path: '/legal-check',     title: 'Diligence Officer : Legal check',         icon:'nc-bank',       class: '' },
    {
        path: '/do-application-list',     title: 'Diligence Officer : Application List',         icon:'nc-bank',       class: ''
    },
    {
        path: '/do-application-update',     title: 'Diligence Officer : Application Update',         icon:'nc-bank',       class: ''
    },
    {
      path: '/sanction-letter-form',     title: 'Diligence Officer : Sanction Letter form',         icon:'nc-bank',       class: ''
    },
    {
      path: '/loanagreementform',     title: 'Diligence Officer : Loan Agreement Form',         icon:'nc-bank',       class: ''
    },
    // {
    //   path: '/view-details',        title: 'View Details For Deligence Officer',  icon:'nc-bank',       class: ''
    // },


    //Operational Executive module
    {
        path: '/credit-score',     title: 'Operational Executive: Credit Score',         icon:'nc-bank',       class: ''
    },
    {
      path: '/oe-enquiry-list',     title: 'Operational Executive: Enquiry List',         icon:'nc-bank',       class: ''
    },

    //Branch Manager Module
    {
        path: '/bm-application-list',     title: 'Branch Manager: Application List',         icon:'nc-bank',       class: ''
    },
    {
        path: '/bm-application-update',     title: 'Branch Manager : Application Update',         icon:'nc-bank',       class: ''
    },
    {
      path: '/view-sanction-letter' , title: "Branch Manager : View Sanction Letter", icon: "pe-7s-graph", class: ""
    },
    {
      path: '/view-loan-agreement' , title: "Branch Manager : View Loan Agreement", icon: "pe-7s-graph", class: ""
    },
    

    //Accounts Manager Module
    {
        path: '/am-application-list', title: "Accounts Manager : Application List", icon: "pe-7s-graph", class: ""
      },
      {
        path: '/disbursement-form', title: "Accounts Manager : Disbursement Form", icon: "pe-7s-graph", class: ""
      },
      {
        path: '/ledger-total-list', title: "Accounts Manager : Ledger Total List", icon: "pe-7s-graph", class: ""
      },
      {
        path: '/ledger-defaulter-list', title: "Accounts Manager : Ledger Defaulter List", icon: "pe-7s-graph", class: ""
      },
      {
        path: '/ledger-form', title: "Accounts Manager : Ledger Form", icon: "pe-7s-graph", class: ""
      },

    //Telecom Module
    {
        path: 'tc-defaulter-list', title: "Defaulter List For Telecom Team", icon: "pe-7s-graph", class: ""
      },






    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' }
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    role: string;
    constructor() {}
  
    ngOnInit() {
      // this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.menuItems = Menu.menu;
      console.log(this.menuItems);
      this.role = sessionStorage.getItem("role");
      console.log(this.role);
    }
}
