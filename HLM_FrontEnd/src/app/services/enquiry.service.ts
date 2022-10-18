import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  

  backendUrl: string = 'http://localhost:9090/enquiryApi/'

  // dummyUrl: string = 'http://localhost:3000/EnquiryForm' 

  constructor(private http: HttpClient) { }


 insertEnquiry(newEnquiryForm : any){

  alert("service method called")
  return this.http.post(this.backendUrl+"postEnquriyForm", newEnquiryForm)
 }

 getEnquiryList(){
  return this.http.get(this.backendUrl+"getallenquirydata")
 }

 updateCibilDetails(enquiryWithCibilDetails : any, enquiryId: number){

  return this.http.put(this.backendUrl+"updateEnquriyForm/"+enquiryId, enquiryWithCibilDetails)
 }

}
