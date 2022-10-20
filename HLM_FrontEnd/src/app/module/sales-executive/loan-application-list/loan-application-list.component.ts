import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from 'app/model/customer';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-loan-application-list',
  templateUrl: './loan-application-list.component.html',
  styleUrls: ['./loan-application-list.component.css']
})
export class LoanApplicationListComponent implements OnInit {

  constructor(private service: CustomerApplicationService, private fb: FormBuilder) { }

  existingCustomerId: any
  customerForm: FormGroup
  customerList: Customer[]
  ngOnInit(): void {

    this.customerFormFields()

    this.service.getCustomerList().subscribe((dataList: Customer[])=>{
      this.customerList = dataList;
    })

  }

  customerFormFields(){
    this.customerForm = this.fb.group({
      customerAcceptanceStatus: ['']
    })

  }



  customerAcceptance(customerId: any){
    alert('CustomerId: '+ customerId)

    this.customerForm.get('customerAcceptanceStatus').setValue('Accepted')
    
    console.log('Customer Response: '+this.customerForm.get('customerAcceptanceStatus').value)

    this.existingCustomerId = customerId

    this.submitCustomerResponse()
    
  }

  submitCustomerResponse(){

    const customerFormJson = JSON.stringify(this.customerForm.value)

    const customerFormData = new FormData
    customerFormData.append('customerApplication', customerFormJson)

    this.service.submitCustomerResponse(customerFormData, this.existingCustomerId).subscribe()
  }



}
