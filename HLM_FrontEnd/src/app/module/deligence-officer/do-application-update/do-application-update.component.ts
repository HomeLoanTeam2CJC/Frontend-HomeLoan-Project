import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-do-application-update',
  templateUrl: './do-application-update.component.html',
  styleUrls: ['./do-application-update.component.css']
})
export class DoApplicationUpdateComponent implements OnInit {

  constructor(private service: CustomerApplicationService, private fb: FormBuilder) { }

  customerUpdateForm: FormGroup

  ngOnInit(): void {
    this.customerUpdateForm = this.fb.group({

      FinancialCheck: this.fb.group({
          
        cibilDetails: this.fb.group({
          cibilId: [],
          cibilScore: [''],
          cibilScoreDateTime: [''],
          status: [''],
          remarksByOe: ['']
      }),
        netIncome:[]

      }),
      
      fieldInvestigation: this.fb.group({
        addressValidity:[''],
        contactDetailsValidity:[''],
        companyDetailsValidity:[''],
        propertyLegality:['']
    }),
    technicalCheck: this.fb.group({
      propertyVisit:[''],
    propertyValuation:[ ]
  }),

    })
  }
  updateCustomerForm()
  {
    
  }
}
