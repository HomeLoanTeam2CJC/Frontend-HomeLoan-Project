import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/customer';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-am-application-list',
  templateUrl: './am-application-list.component.html',
  styleUrls: ['./am-application-list.component.css']
})
export class AmApplicationListComponent implements OnInit {

  constructor(private service: CustomerApplicationService) { }

  customerList: Customer []
  ngOnInit(): void {

    this.service.getCustomerList().subscribe((dataList: Customer[])=>{
      this.customerList = dataList
  })
}

}
