import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryService } from 'app/services/enquiry.service';

@Component({
  selector: 'app-credit-score',
  templateUrl: './credit-score.component.html',
  styleUrls: ['./credit-score.component.css']
})
export class CreditScoreComponent implements OnInit {

  constructor(private location: Location, private service: EnquiryService, private fb: FormBuilder) { }

  uploadedPancard: any

  enquiryForm: FormGroup

  ngOnInit(): void {

    this.enquiryFormFields()
    this.setEnquiryForm()
  }


  enquiryFormFields(){
    alert("enquiryFormFields method called")

    this.enquiryForm = this.fb.group({

      enquiryId: [],
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      gender: [''],
      email:[''],
      mobileNo: [],
      panno: [''],
      occupation: [''],
      address: this.fb.group({
          addressId: [],
          houseNumber: [],
          streetName: [''],
          areaName: [''],
          cityName: [''],
          district: [''],
          state: [''],
          pincode: [],
      }),
      
      loanPurpose: [''],
      nearestBranch:[''],
      cibilDetails: this.fb.group({
          cibilId: [],
          cibilScore: [''],
          cibilScoreDateTime: [''],
          status: [''],
          remarksByOe: ['']
      })

    })
  }


  setEnquiryForm(){
    let enquiry:any = this.location.getState()
    alert("transported Object ID: "+enquiry.enquiryId)
    console.log("getState() transported Object ID: "+enquiry.enquiryId)
    console.log("getState() transported Object firstName: "+enquiry.firstName)

    if(enquiry.enquiryId!=0){
      this.enquiryForm.get('enquiryId').setValue(enquiry.enquiryId)
      this.enquiryForm.get('firstName').setValue(enquiry.firstName)
      this.enquiryForm.get('lastName').setValue(enquiry.lastName)
      this.enquiryForm.get('gender').setValue(enquiry.gender)
      this.enquiryForm.get('dateOfBirth').setValue(enquiry.dateOfBirth)
      this.enquiryForm.get('email').setValue(enquiry.email)
      this.enquiryForm.get('mobileNo').setValue(enquiry.mobileNo)
      this.enquiryForm.get('panno').setValue(enquiry.panno)
      this.enquiryForm.get('occupation').setValue(enquiry.occupation)
      this.enquiryForm.get('loanPurpose').setValue(enquiry.loanPurpose)
      this.enquiryForm.get('nearestBranch').setValue(enquiry.nearestBranch)

      this.enquiryForm.get('address').get('addressId').setValue(enquiry.address.addressId)
      this.enquiryForm.get('address').get('houseNumber').setValue(enquiry.address.houseNumber)
      this.enquiryForm.get('address').get('streetName').setValue(enquiry.address.streetName)
      this.enquiryForm.get('address').get('areaName').setValue(enquiry.address.areaName)
      this.enquiryForm.get('address').get('cityName').setValue(enquiry.address.cityName)
      this.enquiryForm.get('address').get('district').setValue(enquiry.address.district)
      this.enquiryForm.get('address').get('state').setValue(enquiry.address.state)
      this.enquiryForm.get('address').get('pincode').setValue(enquiry.address.pincode)

       this.uploadedPancard = enquiry.uploadedPancard
       

      alert("Assigned firstName "+this.enquiryForm.controls['firstName'].value)
      console.log("Assigned firstName "+this.enquiryForm.controls['firstName'].value)
    }
  }


  submitCibilDetails(){
    alert("submitCibilDetails() called")

    const enquiryFormJson = JSON.stringify(this.enquiryForm.value)

    const enquiryFormData = new FormData
    enquiryFormData.append('userEnquiryForm', enquiryFormJson)
    enquiryFormData.append('uploadedPancard', this.uploadedPancard)


    console.log(this.enquiryForm.controls['enquiryId'].value)

    this.service.updateCibilDetails(enquiryFormData, this.enquiryForm.controls['enquiryId'].value).subscribe()
  }
}
