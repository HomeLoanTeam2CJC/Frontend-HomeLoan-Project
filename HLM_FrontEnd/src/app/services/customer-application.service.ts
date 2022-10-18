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

  saveCutomerApplication(customerApplication : any){

    return this.http.post(this.backendCustomerUrl+"newCustomerApplication", customerApplication)
  }

  saveStep1(step1: any, savedCustomerID: any){
    
    return this.http.post(this.step1Url+"postStep1/"+savedCustomerID, step1)
  }

  saveStep2(step2: any, savedCustomerID: any){
    return this.http.post(this.step2Url+"postStep2/"+savedCustomerID, step2)
  }
}
