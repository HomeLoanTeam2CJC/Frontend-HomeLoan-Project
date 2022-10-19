import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/customer';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-loan-application-list',
  templateUrl: './loan-application-list.component.html',
  styleUrls: ['./loan-application-list.component.css']
})
export class LoanApplicationListComponent implements OnInit {

  constructor(private service: CustomerApplicationService) { }

  customerList: Customer[]
  ngOnInit(): void {
    this.service.getCustomerList().subscribe((dataList: Customer[])=>{
      this.customerList = dataList
    })

  }

}
