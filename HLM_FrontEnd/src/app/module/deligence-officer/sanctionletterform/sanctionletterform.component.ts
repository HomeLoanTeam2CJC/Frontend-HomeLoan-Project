import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-sanctionletterform',
  templateUrl: './sanctionletterform.component.html',
  styleUrls: ['./sanctionletterform.component.css']
})
export class SanctionletterformComponent implements OnInit {

  constructor(private service:CustomerApplicationService,private fb: FormBuilder, private routes: ActivatedRoute) { }

  existingCustomerId: any
  customerForm: FormGroup
  ngOnInit(): void {
    this.customerForm = this.fb.group({

      sanctionLetterStatus: [''],
      sanctionLetter: this.fb.group({
          sanctionDate:[''],
          applicantName:[''],
          contactDetails:[],
          maxSanctionAmount:[],
          maxEmi:[],
          averageTenure:[],
          validity:[],
        })
      
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

  }

  
  submitSanctionForm()
  {
    alert("submitSanctionForm() called")

    const customerFormJson = JSON.stringify(this.customerForm.value)

    const customerFormData = new FormData
    customerFormData.append('customerApplication', customerFormJson)

    this.service.sanctionLetterData(customerFormData, this.existingCustomerId).subscribe()

  }
}
