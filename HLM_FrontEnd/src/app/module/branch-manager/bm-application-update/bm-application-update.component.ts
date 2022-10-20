import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-bm-application-update',
  templateUrl: './bm-application-update.component.html',
  styleUrls: ['./bm-application-update.component.css']
})
export class BmApplicationUpdateComponent implements OnInit {

  constructor(private service: CustomerApplicationService, private fb: FormBuilder, private location: Location, private routes: ActivatedRoute) { }

  customerForm: FormGroup
  existingCustomerId: any
  
  ngOnInit(): void {
  
    this.customerForm=this.fb.group({
      doReportBmResponseStatus:[''],
      doReportBmResponse:['']
    })

    this.getCustomerState()
  }


  getCustomerState(){

    this.routes.paramMap.subscribe(param1=>{
      let cId= param1.get('customerId');
      let customerId=parseInt(cId);
      console.log('customerID: '+customerId)
      this.existingCustomerId = customerId
      
    })

    console.log('existingCustomerId: '+this.existingCustomerId)

    // let customer: any = this.location.getState()
    // console.log("deligenceReportId: "+customer.deligenceReport.deligenceReportId)
    // this.customerForm.get('deligenceReport').get('deligenceReportId').setValue(customer.deligenceReport.deligenceReportId)

  }

  updateBankManagerReport()
  {

    alert("submitBM Repsonse() called")
    alert(this.customerForm.get('doReportBmResponseStatus').value)

    const customerFormJson = JSON.stringify(this.customerForm.value)

    const customerFormData = new FormData
    customerFormData.append('customerApplication', customerFormJson)

    this.service.branchManagermResponse(customerFormData, this.existingCustomerId).subscribe()

    
  }

}
