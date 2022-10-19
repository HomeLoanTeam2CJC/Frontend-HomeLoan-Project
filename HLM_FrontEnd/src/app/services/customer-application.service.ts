import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  stepSanctionLetter: string = 'step5.1 api'

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

  sanctionLetterData(sanctionLetterData: any){

    return this.http.post(this.stepSanctionLetter, sanctionLetterData)
  }



}
