import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanDisbursementService } from 'app/services/loan-disbursement.service';

@Component({
  selector: 'app-disbursement-form',
  templateUrl: './disbursement-form.component.html',
  styleUrls: ['./disbursement-form.component.css']
})
export class DisbursementFormComponent implements OnInit {

  constructor(private loanservice: LoanDisbursementService, private fb: FormBuilder) { }
  disbursementForm: FormGroup
  ngOnInit(): void {
    this.disbursementForm = this.fb.group({

      agreementId: [],
      loanNumber: [],
      agreementDate: [''],
      amountPayType: [''],
      totalLoanAmount : [],
      bankName: [''],
      accountNumber: [],
      ifscCode: [''],
      accountType: [''],
      transferAmount: [],
      paymentStatus: [''],
      amountPaidDate: [''],
  })

}

submitDisbursementForm()
{

}

reset()
{
  
}
}
