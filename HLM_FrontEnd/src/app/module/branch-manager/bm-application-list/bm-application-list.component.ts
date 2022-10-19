import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/customer';

import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-bm-application-list',
  templateUrl: './bm-application-list.component.html',
  styleUrls: ['./bm-application-list.component.css']
})
export class BmApplicationListComponent implements OnInit {

  constructor(private service:CustomerApplicationService) { }

  customerList: Customer[]
  
  ngOnInit(): void {
    
    this.service.getCustomerList().subscribe((customerData: Customer[])=>{
      this.customerList = customerData
    })

  }

}
