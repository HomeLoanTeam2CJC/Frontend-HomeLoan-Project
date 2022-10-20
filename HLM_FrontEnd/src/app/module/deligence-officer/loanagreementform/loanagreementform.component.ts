import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-loanagreementform',
  templateUrl: './loanagreementform.component.html',
  styleUrls: ['./loanagreementform.component.css']
})
export class LoanagreementformComponent implements OnInit {

  constructor(private service:CustomerApplicationService,private fb: FormBuilder,private routes :ActivatedRoute) { }
  customerForm: FormGroup
  existingCustomerId: any
  
  ngOnInit(): void {

    this.customerForm = this.fb.group({
      
      loanAgreementStatus:[],
      loanAgreement : this.fb.group({
        loanAgreementName:[''],
        applicantName:[''],
        contactDetails:[],
        loanAmountSanctioned:[],
        interestType:[''],
        rateOfInterest:[],
        loanTenure:[],
        monthlyEmiAmount:[],
        modeOfPayment:[''],
        remarks:[''],
        status:['']
      })
      
    })
    this.getCustomerState()
  }
  submitLoanagreementForm()
  {
    alert("submitLoanagreementForm() called")

    const customerFormJson = JSON.stringify(this.customerForm.value)

    const customerFormData = new FormData
    customerFormData.append('customerApplication', customerFormJson)

    this.service.submitLoanAgreement(customerFormData,this.existingCustomerId).subscribe()

  }

  getCustomerState(){

    this.routes.paramMap.subscribe(param1=>{
      let cId= param1.get('customerId');
      let customerId=parseInt(cId);
      console.log('customerID: '+customerId)
      this.existingCustomerId = customerId
      
    })
  }
}
