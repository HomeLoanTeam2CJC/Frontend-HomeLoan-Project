import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-bm-application-update',
  templateUrl: './bm-application-update.component.html',
  styleUrls: ['./bm-application-update.component.css']
})
export class BmApplicationUpdateComponent implements OnInit {

  constructor(private service: CustomerApplicationService, private fb: FormBuilder, private location: Location, private routes: ActivatedRoute) { }

  bankManagerReportForm:FormGroup

  customerForm: FormGroup
  
  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customerId: []
    })
  
    this.bankManagerReportForm=this.fb.group({
      doReportBmResponseStatus:[''],
      doReportBmResponse:['']
    })
  }

  updateBankManagerReport()
  {
    
  }

}
