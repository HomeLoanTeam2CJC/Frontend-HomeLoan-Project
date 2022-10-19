import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-sanctionletterform',
  templateUrl: './sanctionletterform.component.html',
  styleUrls: ['./sanctionletterform.component.css']
})
export class SanctionletterformComponent implements OnInit {

  constructor(private service:CustomerApplicationService,private fb: FormBuilder) { }
  sanctionLetterForm: FormGroup
  ngOnInit(): void {
    this.sanctionLetterForm = this.fb.group({

      sanctionDate:[''],
      applicantName:[''],
      contactDetails:[],
      maxSanctionAmount:[],
      maxEmi:[],
      averageTenure:[],
      validity:[],
      
  })
  }
  submitSanctionForm()
  {

  }
  reset(){
    
  }
}
