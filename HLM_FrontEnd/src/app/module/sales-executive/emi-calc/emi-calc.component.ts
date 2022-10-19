import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emi-calc',
  templateUrl: './emi-calc.component.html',
  styleUrls: ['./emi-calc.component.css']
})
export class EmiCalcComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  loancal!: FormGroup;
  loanAmount: any;
  tenure: any;
  interest:any;
  emi: any;
  totalAmountPaid:any
  onlyInterest:any

  ngOnInit(): void {
    this.loancal = this.fb.group({
      loanAmount: new FormControl('', [Validators.required]),
      tenure: new FormControl('', [Validators.required]),
      interest: new FormControl('', [Validators.required]),
    })
  }

  onSubmit()
  {
    if (this.loancal.valid)
    {
      alert("In OnSubmit")
      var r= ((this.interest/12)/100)
      var a= ((1+r)**this.tenure)
      var b = (((1+r)**this.tenure)-1)
      var c = this.loanAmount*r
      this.emi=(c*(a/b))
      this.totalAmountPaid=this.emi*this.tenure
      this.onlyInterest=this.totalAmountPaid-this.loanAmount;
 
    }
  }
 

}
