import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanDisbursementService } from 'app/services/loan-disbursement.service';

@Component({
  selector: 'app-ledger-form',
  templateUrl: './ledger-form.component.html',
  styleUrls: ['./ledger-form.component.css']
})
export class LedgerFormComponent implements OnInit {

  constructor(private loanservice: LoanDisbursementService, private fb: FormBuilder) { }
  ledgerForm: FormGroup

  ngOnInit(): void {
    this.ledgerForm = this.fb.group({
      ledgerCreatedDate:[''],
      totalLoanAmount:[],
      payableAmountWithInterest:[],
      tenure:[],
      monthlyEMI:[],
      amountPaidTillDate:[],
      remainingAmount:[],
      nextEmiDateStart:[''],
      nextEmiDateEnd:[''],
      defaulterCount:[],
      previousEmiStatus:[''],
      currentMonthEmiStatus:[''],
      loanEndDate:[''],
      loanStatus:[''],
      defaulterStatus:[''],
  })

}

submitLedgerForm()
{

}

reset()
{
  
}

}
