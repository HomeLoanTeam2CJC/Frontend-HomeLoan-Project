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
    { path: '/schemes',     title: 'Schemes',         icon:'nc-bank',       class: '' },
    { path: '/enquiry-form',     title: 'Enquiry Form',         icon:'nc-bank',       class: '' },
    { path: '/enquiry-list',     title: 'Enquiry List',         icon:'nc-bank',       class: '' },
    { path: '/loan-application-form',     title: 'Loan Application Form',         icon:'nc-bank',       class: '' },
    { path: '/loan-application-list',     title: 'Loan Application List',         icon:'nc-bank',       class: '' },
    { path: '/application-details',     title: 'Application Details',         icon:'nc-bank',       class: '' },
    { path: '/emi-calc',     title: 'EMI Calculator',         icon:'nc-bank',       class: '' },


    //Deligence Officer Module
    { path: '/financial-check',     title: 'Financial check',         icon:'nc-bank',       class: '' },
    { path: '/field-investigation',     title: 'Field Investigation',         icon:'nc-bank',       class: '' },
    { path: '/technical-check',     title: 'Technical check',         icon:'nc-bank',       class: '' },
    { path: '/legal-check',     title: 'Legal check',         icon:'nc-bank',       class: '' },
    {
        path: '/do-application-list',     title: 'Application List  For Deligence Officer',         icon:'nc-bank',       class: ''
    },
    {
        path: '/do-application-update',     title: 'Application Update  For Deligence Officer',         icon:'nc-bank',       class: ''
    },


    //Operational Executive module
    {
        path: '/credit-score',     title: 'Credit Score',         icon:'nc-bank',       class: ''
    },
    {
      path: '/oe-enquiry-list',     title: 'Enquiry List for Operational executive',         icon:'nc-bank',       class: ''
    },

    //Branch Manager Module
    {
        path: '/bm-application-list',     title: 'Application List For Branch Manager',         icon:'nc-bank',       class: ''
    },
    {
        path: '/bm-application-update',     title: 'Application Update For Branch Manager',         icon:'nc-bank',       class: ''
    },

    //Accounts Manager Module
    {
        path: '/am-application-list', title: "Application List For Accounts Manager", icon: "pe-7s-graph", class: ""
      },
      {
        path: '/disbursement-form', title: "Disbursement Form", icon: "pe-7s-graph", class: ""
      },
    {
      path: '/ledger-total-list', title: "Ledger Total List", icon: "pe-7s-graph", class: ""
    },
    {
      path: '/ledger-defaulter-list', title: "Ledger Defaulter List", icon: "pe-7s-graph", class: ""
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
