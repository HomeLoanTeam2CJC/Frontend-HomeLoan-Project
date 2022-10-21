export class Menu {
    public static menu: Array<any> = [
      {

        //Sales Executive Module
        se:[{path: "schemes", title: "Schemes", icon: "fa fa-address-book", class: "" },
            {path: "application-details", title: "Application Details", icon: "pe-7s-graph", class: "" },
            {path: "loan-application-form", title: "Loan Application Form", icon: "pe-7s-graph", class: "" },
            {path: "loan-application-list", title: "Loan Application List", icon: "pe-7s-graph", class: "" },
            {path: "enquiry-form", title: "Enquiry Form", icon: "pe-7s-graph", class: "" },
            {path: "enquiry-list", title: "Enquiry List", icon: "pe-7s-graph", class: "" },
            {path: "emi-calc", title: "EMI Calculator", icon: "pe-7s-graph", class: "" },
            {
              path: 'loan-application-list/customer-acceptance', title: "Customer Acceptance Form", icon: "pe-7s-graph", class: ""
            }
          ],

          //Deligence officer Module
        do:[
          {
            path: "financial-check", title: "Financial Check", icon: "pe-7s-graph", class: ""
          },
        {
          path: 'field-investigation', title: "Field Investigation", icon: "pe-7s-graph", class: "" 
        },
        {
          path: 'technical-check', title: "Technical Check", icon: "pe-7s-graph", class: "" 
        },
        {
          path: 'legal-check', title: "Legal Check", icon: "pe-7s-graph", class: "" 
        },
        {
          path: 'do-application-list', title: "Application List", icon: "pe-7s-graph", class: "" 
        },
        {
          path: 'do-application-list/do-application-update', title: "Application Update", icon: "pe-7s-graph", class: "" 
        },
        {
          path: 'do-application-list/sanction-letter-form', title: "Sanction Letter Form", icon: "pe-7s-graph", class: "" 
        },
        {
          path: 'loanagreementform', title: "Loan Agreement Form", icon: "pe-7s-graph", class: "" 
        },
        // {
        //   path: 'view-details', title: "View Details", icon: "pe-7s-graph", class: "" 
        // }
      
      ],

      //Operational executive Module
      oe:[
        {
          path: 'oe-enquiry-list/credit-score', title: "Credit Score", icon: "pe-7s-graph", class: "" 
        },
        {
          path: 'oe-enquiry-list', title: 'Enquiry List', icon: "pe-7s-graph", class: ""
        }
      ],

      //Branch manager Module
      bm: [
        {
          path: 'bm-application-list' , title: "Application List", icon: "pe-7s-graph", class: ""
        },
        {
          path: 'bm-application-list/bm-application-update' , title: "Application Update", icon: "pe-7s-graph", class: ""
        },
        {
          path: 'bm-application-list/view-sanction-letter' , title: "View Sanction Letter", icon: "pe-7s-graph", class: ""
        },
        {
          path: 'bm-application-list/view-loan-agreement' , title: "View Loan Agreement", icon: "pe-7s-graph", class: ""
        },
      
      ],

      //Accounts Manager
      am: [
        {
          path: 'am-application-list', title: "Application List", icon: "pe-7s-graph", class: ""
        },
        {
          path: 'disbursement-form', title: "Disbursement Form", icon: "pe-7s-graph", class: ""
        },
        {
          path: 'ledger-total-list', title: "Ledger Total List", icon: "pe-7s-graph", class: ""
        },
        {
          path: 'ledger-defaulter-list', title: "Ledger Defaulter List", icon: "pe-7s-graph", class: ""
        },
        {
          path: 'ledger-form', title: "Ledger Form", icon: "pe-7s-graph", class: ""
        }
      ],

      //Telecom Module
      tc: [
        {
          path: 'tc-defaulter-list', title: "Defaulter List", icon: "pe-7s-graph", class: ""
        }
      ]

      
      }
    ];
  }
  