import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'app/model/customer';
import { CustomerApplicationService } from 'app/services/customer-application.service';
import html2canvas from 'html2canvas';
import { data } from 'jquery';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-email-pdf-sanction-letter',
  templateUrl: './email-pdf-sanction-letter.component.html',
  styleUrls: ['./email-pdf-sanction-letter.component.css']
})
export class EmailPdfSanctionLetterComponent implements OnInit {

  constructor(private service: CustomerApplicationService, private fb: FormBuilder, private routes: ActivatedRoute) { }
  customer:Customer
  attachment: any
  emailForm: FormGroup
  existingCustomerId: any

  ngOnInit(): void {
    this.emailForm = this.fb.group({

      subject: [''],
      textBody: ['']
    })
    this.getState()
    this.service.getCustomer(this.existingCustomerId).subscribe((data:Customer)=>{
      this.customer = data;
      alert(this.customer.sanctionLetter.maxSanctionAmount)
      alert(this.customer.sanctionLetter.sanctionDate)
    })
   
   
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

  generatePDF(){
   
    var data:any=document.getElementById("SanctionLetterPDF");

    html2canvas(data).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      PDF.addImage(FILEURI, 'PNG', 0, 0, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  sendEmail(){

   
    const emailJson = JSON.stringify(this.emailForm.value)

    const emailFormData = new FormData
    emailFormData.append('customerEmail', emailJson)
    emailFormData.append('attachedFile', this.attachment)

    this.service.sendEmail(emailFormData, this.existingCustomerId).subscribe()
  }



}
