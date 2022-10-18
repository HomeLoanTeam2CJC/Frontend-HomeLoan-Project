import { Component, OnInit } from '@angular/core';
import { EnquiryForm } from 'app/model/enquiry-form';
import { EnquiryService } from 'app/services/enquiry.service';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.css']
})
export class EnquiryListComponent implements OnInit {

  constructor(private service: EnquiryService) { }

  enquiryList : EnquiryForm[]

  ngOnInit(): void {
    this.service.getEnquiryList().subscribe((enquiryData: EnquiryForm[])=>{
      this.enquiryList = enquiryData
    })

  }

}
