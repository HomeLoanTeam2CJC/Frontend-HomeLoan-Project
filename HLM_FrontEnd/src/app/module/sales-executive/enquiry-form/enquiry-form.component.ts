import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryService } from 'app/services/enquiry.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {

  constructor(private service: EnquiryService, private fb: FormBuilder) { }

  uploadedPancard: any
  enquiryForm: FormGroup


  ngOnInit(): void {

    this.enquiryForm = this.fb.group({

      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      gender: [''],
      email:[''],
      mobileno: [],
      panno: [''],
      occupation: [''],
      address: this.fb.group({
          
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

  reader= new FileReader()
  pancardImg: any

  onSelectingPancard(event){

    this.uploadedPancard = event.target.files[0]

    //to display uploaded file
    this.reader.onload = e => this.pancardImg = this.reader.result;
       this.reader.readAsDataURL(this.uploadedPancard)
  }


  submitEnquiryForm(){
   

    alert("submitEnquiry called")
    const enquiryFormJson = JSON.stringify(this.enquiryForm.value)

    const enquiryFormData = new FormData
    enquiryFormData.append('userEnquiryForm', enquiryFormJson)
    enquiryFormData.append('uploadedPancard', this.uploadedPancard)

    this.service.insertEnquiry(enquiryFormData).subscribe()
  }

}
