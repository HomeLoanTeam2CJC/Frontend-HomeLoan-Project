import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-email-pdf-sanction-letter',
  templateUrl: './email-pdf-sanction-letter.component.html',
  styleUrls: ['./email-pdf-sanction-letter.component.css']
})
export class EmailPdfSanctionLetterComponent implements OnInit {



  

  constructor(private service: CustomerApplicationService, private fb: FormBuilder, private routes: ActivatedRoute) { }

  attachment: any
  emailForm: FormGroup
  existingCustomerId: any

  ngOnInit(): void {
    this.emailForm = this.fb.group({

      subject: [''],
      textBody: ['']
    })

    this.getState()


  }

  getState(){

    this.routes.paramMap.subscribe(param1=>{
      let cId= param1.get('customerId');

      this.existingCustomerId =parseInt(cId);
      alert("existingCustomerId: "+this.existingCustomerId)

      console.log('customerID: '+this.existingCustomerId)

    })
  }


  onSelectingAttachment(event){

    this.attachment = event.target.files[0]
  }

  sendEmail(){

    const emailJson = JSON.stringify(this.emailForm.value)

    const emailFormData = new FormData
    emailFormData.append('customerEmail', emailJson)
    emailFormData.append('attachedFile', this.attachment)

    this.service.sendEmail(emailFormData, this.existingCustomerId).subscribe()
  }



}
