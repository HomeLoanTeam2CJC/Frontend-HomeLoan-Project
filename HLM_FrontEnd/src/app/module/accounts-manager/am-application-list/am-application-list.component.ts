import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/customer';
import { CustomerApplicationService } from 'app/services/customer-application.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-am-application-list',
  templateUrl: './am-application-list.component.html',
  styleUrls: ['./am-application-list.component.css']
})
export class AmApplicationListComponent implements OnInit {

  constructor(private service: CustomerApplicationService, private location: Location, private fb: FormBuilder) { }


  customerForm: FormGroup
  disbForm: string = 'close'
  customerId: any
  customerList: Customer []
  ngOnInit(): void {

    this.customerFormFields()

    this.service.getCustomerList().subscribe((dataList: Customer[])=>{
      this.customerList = dataList
  })
}



  customerFormFields(){
    this.customerForm = this.fb.group({
      loanDisbursementStatus: [''],
      loanDisbursement: this.fb.group({
        loanNumber: [''],
        agreementDate: [''],
        amountPayType: [''],
        totalLoanAmount : [''],
        bankName: [''],
        accountNumber: [''],
        ifscCode: [''],
        accountType: [''],
        transferAmount: [''],
        paymentStatus: [''],
        amountPaidDate: ['']
      })
    })
  }



  openForm(custId: any){
    this.customerId = custId
    
    if(this.disbForm === 'close'){
      this.disbForm = 'open'
    }
    else if(this.disbForm === 'open'){
      this.disbForm = 'close'
    }
  }


  changeStatus(cId: any){
    
    //If we are sending only loanDisbursementStatus to backend via separate API
    this.customerId = cId
    alert('customerID'+this.customerId)

    if(this.customerForm.get('loanDisbursementStatus').value === ''){
      alert('setting status = In Progress')
      this.customerForm.get('loanDisbursementStatus').setValue('In Progress')
      alert('loanDisbursementStatus :'+this.customerForm.get('loanDisbursementStatus').value )
    }
    else if(this.customerForm.get('loanDisbursementStatus').value === 'In Progress'){
      alert('setting status = Started')
      this.customerForm.get('loanDisbursementStatus').setValue('Started')
      alert('loanDisbursementStatus :'+this.customerForm.get('loanDisbursementStatus').value )
    }
    else if(this.customerForm.get('loanDisbursementStatus').value === 'Started'){
      alert('setting status = Halted')
      this.customerForm.get('loanDisbursementStatus').setValue('Halted')
      alert('loanDisbursementStatus :'+this.customerForm.get('loanDisbursementStatus').value )
    }
    else if(this.customerForm.get('loanDisbursementStatus').value === 'Halted'){
      alert('setting status = Completed')
      this.customerForm.get('loanDisbursementStatus').setValue('Completed')
      alert('loanDisbursementStatus :'+this.customerForm.get('loanDisbursementStatus').value )
    }
    else{
      alert('setting status = null')
      this.customerForm.get('loanDisbursementStatus').setValue(null)
      alert('loanDisbursementStatus :'+this.customerForm.get('loanDisbursementStatus').value )
    }

  }



    submitCustomerForm(){

      alert('customerID'+this.customerId)
      this.changeStatus(this.customerId)

      const customerFormJson = JSON.stringify(this.customerForm.value)

      const customerFormData = new FormData
      customerFormData.append('customerApplication', customerFormJson)

      this.service.loanDisbursement(customerFormData, this.customerId).subscribe()
    }

    submitDisbStatus(){

      
    }

}
