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

  deligenceReportForm: FormGroup
  existingCustomerId: any

  customerForm: FormGroup

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customerId: []
    })
    this.deligneceReportFields()
    this.getCustomerState()

    

  }

  deligneceReportFields(){

    this.customerForm = this.fb.group({
      
    })
    this.deligenceReportForm = this.fb.group({

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
  }



  getCustomerState(){

    this.routes.paramMap.subscribe(param1=>{
      let cId= param1.get('customerId');
      let customerId=parseInt(cId);
      this.existingCustomerId = customerId
      
    })

    

    this.customerForm.get('customerId').setValue(this.existingCustomerId)

    let customer: any = this.location.getState()

    console.log("deligenceReportId: "+customer.deligenceReport.deligenceReportId)

    this.deligenceReportForm.get('deligenceReportId').setValue(customer.deligenceReport.deligenceReportId)

  }






  updateDeligenceReport()
  {


    alert("submitDeligenceReport() called")
    alert(this.deligenceReportForm.get('financialCheck').get('cibilScore').value)

    const deligenceFormJson = JSON.stringify(this.deligenceReportForm.value)

    const deligenceFormData = new FormData
    deligenceFormData.append('customerApplication', deligenceFormJson)


    console.log(this.deligenceReportForm.controls['deligenceReportId'].value)



    this.service.updateDeligenceReport(deligenceFormData, this.existingCustomerId).subscribe()
    
  }
}
