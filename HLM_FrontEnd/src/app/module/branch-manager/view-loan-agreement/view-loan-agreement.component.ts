import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Customer } from 'app/model/customer';
import { CustomerApplicationService } from 'app/services/customer-application.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-loan-agreement',
  templateUrl: './view-loan-agreement.component.html',
  styleUrls: ['./view-loan-agreement.component.css']
})
export class ViewLoanAgreementComponent implements OnInit {

  customerForm: FormGroup
  customer: Customer
  customerId: any
  constructor(private location: Location, private service: CustomerApplicationService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.customerForm = this.fb.group({
      loanAgreementBmSignStatus: ['']
    })

    this.getCustomerState()
  }


  getCustomerState(){

      let cust:any = this.location.getState()
      this.customer = cust
      this.customerId = this.customer.customerId
  }

  approve(){
    this.customerForm.get('loanAgreementBmSignStatus').setValue('Approved')
   
    this.submitBmApproval()
  }
  reject(){
    this.customerForm.get('loanAgreementBmSignStatus').setValue('Rejected')
  
    this.submitBmApproval()
  }

  submitBmApproval(){

    const customerJson = JSON.stringify(this.customerForm.value) 

    const customerFormData = new FormData
    customerFormData.append('customerApplication', customerJson)

    this.service.branchManagerFinalApproval(customerFormData, this.customerId).subscribe()
  }
}
