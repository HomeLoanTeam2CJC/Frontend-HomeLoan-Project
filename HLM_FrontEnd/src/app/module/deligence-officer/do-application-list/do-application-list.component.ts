import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/customer';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-do-application-list',
  templateUrl: './do-application-list.component.html',
  styleUrls: ['./do-application-list.component.css']
})
export class DoApplicationListComponent implements OnInit {
  
  constructor(private service: CustomerApplicationService) { }

  customerList: Customer[]
  ngOnInit(): void {

    this.service.getCustomerList().subscribe((customerData: Customer[])=>{
      this.customerList = customerData
    })


  }

}
