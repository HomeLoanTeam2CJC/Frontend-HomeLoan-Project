import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'app/model/customer';
import { Location } from '@angular/common';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {
  
  constructor(private fb:FormBuilder,private routes: ActivatedRoute, private service: CustomerApplicationService,private locations:Location) { }
  customer:Customer;
  reader=new FileReader();
  ngOnInit(): void {
    this.routes.paramMap.subscribe(param1=>{
      this.service.getCustomer(parseInt(param1.get('customerId'))).subscribe((data:Customer)=>{
        this.customer=data;
      })
     })
    }

}
