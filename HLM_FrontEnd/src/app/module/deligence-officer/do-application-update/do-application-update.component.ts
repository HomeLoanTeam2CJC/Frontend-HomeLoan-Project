import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerApplicationService } from 'app/services/customer-application.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-do-application-update',
  templateUrl: './do-application-update.component.html',
  styleUrls: ['./do-application-update.component.css']
})
export class DoApplicationUpdateComponent implements OnInit {

  constructor(private service: CustomerApplicationService, private fb: FormBuilder, private location: Location, private routes: ActivatedRoute) { }

  existingCustomerId: any
  customerForm: FormGroup

  ngOnInit(): void {
    
    this.customerFormFields()
    this.getCustomerState()
    

  }

  customerFormFields(){

    this.customerForm = this.fb.group({
      deligenceReportStatus: [''],
      deligenceReport: this.fb.group({
        deligenceReportId: [],
        financialCheck: this.fb.group({ 
          cibilScore: [],
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
    })
  }



  getCustomerState(){

    this.routes.paramMap.subscribe(param1=>{
      let cId= param1.get('customerId');
      let customerId=parseInt(cId);
      console.log('customerID: '+customerId)
      this.existingCustomerId = customerId
      
    })

    // this.customerForm.get('customerId').setValue(this.existingCustomerId)

    // let customer: any = this.location.getState()

    // console.log("deligenceReportId: "+customer.deligenceReport.deligenceReportId)
    // this.customerForm.get('deligenceReport').get('deligenceReportId').setValue(customer.deligenceReport.deligenceReportId)

  }



  // statusApprove(){
  //   this.customerForm.get('deligenceReportStatus').setValue('Approved')
  //   console.log(this.customerForm.get('deligenceReportStatus').value)
  // }
  // statusReject(){
  //   this.customerForm.get('deligenceReportStatus').setValue('Rejected')
  //   console.log(this.customerForm.get('deligenceReportStatus').value)
  // }


  updateDeligenceReport()
  {


    alert("submitDeligenceReport() called")
    alert(this.customerForm.get('deligenceReport').get('financialCheck').get('cibilScore').value)

    const customerFormJson = JSON.stringify(this.customerForm.value)

    const customerFormData = new FormData
    customerFormData.append('customerApplication', customerFormJson)


    console.log('deligenceReportId: '+this.customerForm.get('deligenceReport').get('deligenceReportId').value)
    this.service.updateDeligenceReport(customerFormData, this.existingCustomerId).subscribe()
    
  }
}
