import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-loanagreementform',
  templateUrl: './loanagreementform.component.html',
  styleUrls: ['./loanagreementform.component.css']
})
export class LoanagreementformComponent implements OnInit {

  constructor(private service:CustomerApplicationService,private fb: FormBuilder) { }
  loanAgreementForm: FormGroup
  ngOnInit(): void {

    this.loanAgreementForm = this.fb.group({
    
      loanAgreementName:[''],
      applicantName:[''],
      contactDetails:[],
      loanAmountSanctioned:[],
      interestType:[''],
      rateOfInterest:[],
      loanTenure:[],
      monthlyEmiAmount:[],
      modeOfPayment:[''],
      remarks:[''],
      status:['']
    })
  }
  submitLoanagreementForm()
  {

  }
}
