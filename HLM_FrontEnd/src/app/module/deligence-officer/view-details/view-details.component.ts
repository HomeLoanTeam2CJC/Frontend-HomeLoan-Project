import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'app/model/customer';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private fb:FormBuilder,private routes: ActivatedRoute, private service: CustomerApplicationService,private location:Location) { }

  customer: Customer
  step: number = 1
  existingCustomerId :any
  ngOnInit(): void {
    this.getCustomerState()
  }

  getCustomerState(){
    this.routes.paramMap.subscribe(param1=>{
      let cId= param1.get('customerId');
      let customerId=parseInt(cId);
      console.log('customerID: '+customerId)
      this.existingCustomerId = customerId


      let getCust:any = this.location.getState()
      this.customer = getCust
      
    })
  }

  nextStep(){

    this.step = this.step+1
    
  }
  prevStep(){
    this.step = this.step-1
  }
}
