import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'app/model/customer';
import { SanctionLetter } from 'app/model/sanction-letter';
import { CustomerApplicationService } from 'app/services/customer-application.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-sanction-letter',
  templateUrl: './view-sanction-letter.component.html',
  styleUrls: ['./view-sanction-letter.component.css']
})
export class ViewSanctionLetterComponent implements OnInit {

  constructor(private service: CustomerApplicationService, private routes: ActivatedRoute, private location: Location) { }

  customerId: any
  sanctionLetter: SanctionLetter
  customerData: Customer
  ngOnInit(): void {

    this.getCustomerState()
    // this.service.getCustomer(this.customerId).subscribe((data: Customer)=>{
    //   this.customerData = data
    // })
  }

  getCustomerState(){

      let cust:any = this.location.getState()
      this.customerData = cust
      this.customerId = this.customerData.customerId

      // this.sanctionLetter = this.customerData.sanctionLetter
      // console.log("applicant name: "+this.sanctionLetter.applicantName)
      // console.log("maxSanctionAmount: "+this.sanctionLetter.maxSanctionAmount)


      // this.routes.paramMap.subscribe(param1=>{
      //   let cId= param1.get('customerId');
      //   let custId=parseInt(cId);
      //   console.log('customerID: '+custId)
      //   this.customerId = custId     
    // })
  }



}
