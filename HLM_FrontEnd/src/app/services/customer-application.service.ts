import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'app/model/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerApplicationService {
  

  constructor(private http: HttpClient) { }



  backendCustomerUrl: string = "http://localhost:9090/customerApi/"

  step1Url: string = 'http://localhost:9090/customerApi/'
  step2Url: string = 'http://localhost:9090/step2Api/'
  step3Url: string = 'http://localhost:9090/step3Api/'
  step4Url: string = 'http://localhost:9090/step4Api/'
  step5Url: string = 'http://localhost:9090/step5Api/'
  step5Point5: string = 'http://localhost:9090/step5Point5Api/'
  step6Url: string = 'http://localhost:9090/step6Api/'
  step7Url: string = 'http://localhost:9090/step7Api/'
  step8Url: string = 'http://localhost:9090/step8Api/'
  step9Url: string = 'http://localhost:9090/step9Api/'
  step10Url: string = 'http://localhost:9090/step10Api/'
  step11Url: string = ''

  

  saveCutomerApplication(customerApplication : any){

    return this.http.post(this.backendCustomerUrl+"newCustomerApplication", customerApplication)
  }

  saveStep1(step1: any, savedCustomerID: any){
    
    return this.http.post(this.step1Url+"postStep1/"+savedCustomerID, step1)
  }

  saveStep2(step2: any, savedCustomerID: any){
    return this.http.post(this.step2Url+"postStep2/"+savedCustomerID, step2)
  }

  saveStep3(step3: any, savedCustomerId: any){
    return this.http.post(this.step3Url+"postStep3/"+savedCustomerId, step3)
  }

  saveStep4(step4: any, savedCustomerId: any){
    return this.http.post(this.step4Url+"postStep4/"+savedCustomerId, step4)
  }

  getCustomerList(){
    return this.http.get(this.backendCustomerUrl+"getCustomerList")
  }

  updateDeligenceReport(deligenceFormData: any, existingCustomerId: any){
    return this.http.post(this.step5Url+"postStep5/"+existingCustomerId, deligenceFormData)
  }

  sanctionLetterData(sanctionLetterData: any, existingCustomerId: any){
    return this.http.post(this.step5Point5+"postStep5Point5/"+existingCustomerId, sanctionLetterData)
  }
  
  branchManagermResponse(customerFormData: any, existingCustomerId: any){
    return this.http.post(this.step6Url+"postStep6/"+existingCustomerId, customerFormData)
  }

  submitCustomerResponse(customerFormData : any, existingCustomerId: any){
    return this.http.post(this.step7Url+"postStep7/"+existingCustomerId, customerFormData)
  }

  submitLoanAgreement(customerFormData : any,existingCustomerId : any){
    return this.http.post(this.step8Url+"postStep8/"+existingCustomerId,customerFormData)
  }

  getCustomer(customerId: any){
    return this.http.get(this.backendCustomerUrl+"getCustomer/"+customerId)
  }


  branchManagerFinalApproval(customerFormData: any, customerId: any){
    return this.http.post(this.step9Url+"postStep9/"+customerId, customerFormData)
  }

  loanDisbursement(customerFormData: any, customerId: any){
    return this.http.post(this.step10Url+"postStep10/"+customerId, customerFormData)
  }

  disbursementStatus(customerFormData: any, customerId: any){
    return this.http.post(this.step11Url+"postStep11/"+customerId, customerFormData)
  }

  sendEmail(emailFormData: any, existingCustomerId: any){
    alert("email sent")
    return this.http.post(this.backendCustomerUrl+"customerEmail/"+existingCustomerId, emailFormData)
  }



}
