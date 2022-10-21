import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerApplicationService } from 'app/services/customer-application.service';

@Component({
  selector: 'app-loan-application-form',
  templateUrl: './loan-application-form.component.html',
  styleUrls: ['./loan-application-form.component.css']
})
export class LoanApplicationFormComponent implements OnInit {

  enteredCustomerId: any

  constructor(private fb: FormBuilder, private service: CustomerApplicationService) { }

  customerApplicationForm: FormGroup;
  step: any = 1;
  reader=new FileReader();

  addressProof: any;
  panCard: any;
  incomeTax: any;
  aadharCard: any;
  photo: any;
  thumbPrint:any
  signature: any
  bankCheque: any
  salarySlips: any
  propertyDocuments: any
  priceProofs: any


  
  

  ngOnInit(): void {

    this.customerApplicationFields()
  }


  customerApplicationFields(){

    this.customerApplicationForm = this.fb.group({
      customerId: [],
      customerName: [''],
      customerDateOfBirth: [''],
      customerAge: [],
      customerGender: [''],
      customerEmail: [''],
      customerMobileNumber: [''],
      customerMobileNumber2: [''],
      customerAmountPaidForHome: [],
      customerTotalLoanRequired: [],
      customerAddress: this.fb.group({
          houseNumber: [],
          streetName: [''],
          areaName: [''],
          cityName: [''],
          district: [''],
          state: [''],
          pincode: []
      }),
      educationalInfo: this.fb.group({
        educationType: ['']
      }),
      // allPersonalDocuments: this.fb.group({


      // }),

      familyInfo: this.fb.group({
        fatherName: [''],
        motherName: [''],
        spouseName: [''],
        noOfFamilyMembers: [''],
        noOfChildren: [''],
        maritalStatus: [''],
        familyIncome: ['']
      }),
      profession: this.fb.group({
        professionId: [''],
        professionType: [''],
        professionSalary: [''],
        professionDesignation: ['']
      }),
      cibilDetails: this.fb.group({
        cibilId: [''],
        cibilScore: [''],
        cibilScoreDateTime: [''],
        status: [''],
        remarksByOe: ['']
      }),
      accountDetails: this.fb.group({
        accountId: [''],
        accountType: [''],
        accountBalance: [''],
        accountHolderName: [''],
        accountStatus: [''],
        accountNumber:[''], 
      }),
      propertyInfo: this.fb.group({
        propertyId: [''],
        propertyType: [''],
        propertyArea: [''],
        constructionArea: [''],
        propertyPrice: [''],
        constructionPrice: [''],
        propertyAddress: this.fb.group({
          propertyAddressId: [''],
          streetName: [''],
          areaName: [''],
          cityName: [''],
          district: [''],
          state: [''],
          pincode: [''],
        })
      }),
      gurantorDetails: this.fb.group({
        gurantorId:[''],
        gurantorName: [''],
        gurantorDateOfBirth: [''],
        gurantorRelationship: [''],
        gurantorMobileNumber: [''],
        gurantorAadharCardNo: [''],
        gurantorAddress: [''],
      }),
      deligenceReportStatus: [''],
      deligenceReport: this.fb.group({
        financialCheck: this.fb.group({
          cibilScore:[''],
          netIncome:['']
        }),
        fieldInvestigation: this.fb.group({
          addressValidity:[''],
          contactDetailsValidity:[''],
          companyDetailsValidity:[''],
          propertyLegality:['']
        }),
        technicalCheck: this.fb.group({
          propertyVisit:[''],
          propertyValuation:['']
        })
      }),
      doReportBmResponseStatus: [''],
      doReportBmResponse: [''],
      sanctionLetterStatus: [''],
      sanctionLetter: this.fb.group({
        sanctionDate:[''],
        applicantName:[''],
        contactDetails:[''],
        maxSanctionAmount:[''],
        maxEmi:[''],
        averageTenure:[''],
        validity:[''],
      }),
      customerAcceptanceStatus: [''],
      loanAgreementStatus: [''],
      loanAgreement: this.fb.group({
        loanAgreementName:[''],
        applicantName:[''],
        contactDetails:[''],
        loanAmountSanctioned:[''],
        interestType:[''],
        rateOfInterest:[''],
        loanTenure:[''],
        monthlyEmiAmount:[''],
        modeOfPayment:[''],
        remarks:[''],
        status:[''],
      }),
      loanAgreementBmSignStatus: [''],
      // loanAgreementCustomerSignStatus: [''],
      loanDisbursementStatus: [''],
      loanDisbursement: this.fb.group({
        loanNumber: [''],
        agreementDate: [''],
        amountPayType: [''],
        totalLoanAmount : [''],
        bankName: [''],
        accountNumber: [''],
        ifscCode: [''],
        accountType: [''],
        transferAmount: [''],
        paymentStatus: [''],
        amountPaidDate: [''],
      })


  })
}

  uploadedAddressProof: any
  onSelectingAddressProof(event){
    this.addressProof = event.target.files[0];

    this.reader.onload=e=>this.uploadedAddressProof=this.reader.result;
    this.reader.readAsDataURL(this.addressProof)
  }

  uploadedPanCard: any
  onSelectingPanCard(event){
    this.panCard = event.target.files[0];

    this.reader.onload=e=>this.uploadedPanCard=this.reader.result;
    this.reader.readAsDataURL(this.panCard)
  }

  uploadedincomeTax: any
  onSelectingincomeTax(event){
    this.incomeTax = event.target.files[0];

    this.reader.onload=e=>this.uploadedincomeTax=this.reader.result;
    this.reader.readAsDataURL(this.incomeTax)
  }

  uploadedaadharCard: any
  onSelectingaadharCard(event){
    this.aadharCard = event.target.files[0];

    this.reader.onload=e=>this.uploadedaadharCard=this.reader.result;
    this.reader.readAsDataURL(this.aadharCard)
  }

  uploadedphoto: any
  onSelectingphoto(event){
    this.photo = event.target.files[0];

    this.reader.onload=e=>this.uploadedphoto=this.reader.result;
    this.reader.readAsDataURL(this.photo)
  }

  uploadedthumbPrint: any
  onSelectingthumbPrint(event){
    this.thumbPrint = event.target.files[0];

    this.reader.onload=e=>this.uploadedthumbPrint=this.reader.result;
    this.reader.readAsDataURL(this.thumbPrint)
  }

  uploadedsignature: any
  onSelectingsignature(event){
    this.signature = event.target.files[0];

    this.reader.onload=e=>this.uploadedsignature=this.reader.result;
    this.reader.readAsDataURL(this.signature)
  }

  uploadedbankCheque: any
  onSelectingbankCheque(event){
    this.bankCheque = event.target.files[0];

    this.reader.onload=e=>this.uploadedbankCheque=this.reader.result;
    this.reader.readAsDataURL(this.bankCheque)
  }

  uploadedsalarySlips: any
  onSelectingsalarySlips(event){
    this.salarySlips = event.target.files[0];

    this.reader.onload=e=>this.uploadedsalarySlips=this.reader.result;
    this.reader.readAsDataURL(this.salarySlips)
  }

  uploadedpropertyDocuments: any
  onSelectingpropertyDocuments(event){
    this.propertyDocuments = event.target.files[0];

    this.reader.onload=e=>this.uploadedpropertyDocuments=this.reader.result;
    this.reader.readAsDataURL(this.propertyDocuments)
  }
  
  uploadedpriceProofs: any
  onSelectingpriceProofs(event){
    this.priceProofs = event.target.files[0];

    this.reader.onload=e=>this.uploadedpriceProofs=this.reader.result;
    this.reader.readAsDataURL(this.priceProofs)
  }
  


  randomNumber: number
  generateRandomNumber(){
    alert("New Customer ID Generated")
    const nums = new Set();
    while(nums.size !== 1) {
      nums.add(Math.floor(Math.random() * 1000) + 1);
    }
    for(let n of nums){
      this.generatedCustomerId = n
    }
  }

  generatedCustomerId: any 

  
  

  directNextStep(){
    // this.enteredCustomerId = enteredCustomerId
    alert(' Entered customerId: '+this.enteredCustomerId)
    this.step = this.step+1
  }

  // Save & Next Button calls this method
  nextStep(){

    const customerApplication=JSON.stringify(this.customerApplicationForm.value);

    const customerFormData=new FormData();
    customerFormData.append("customerApplication",customerApplication);

    if(this.step==1){
      this.generateRandomNumber()
      alert('Please note down your customer Id for future use:  '+this.generatedCustomerId)
      this.service.saveStep1(customerFormData, this.generatedCustomerId ).subscribe()
      alert("Step 1 Saved")
    }

    else if(this.step==2){
      this.service.saveStep2(customerFormData, this.generatedCustomerId).subscribe()
      alert("Step2 saved")
    }

    else if(this.step==3){

      customerFormData.append("allPersonalDocuments.addressProof",this.addressProof);
      customerFormData.append("allPersonalDocuments.panCard",this.panCard);
      customerFormData.append("allPersonalDocuments.incomeTax",this.incomeTax);
      customerFormData.append("allPersonalDocuments.aadharCard",this.aadharCard);
      customerFormData.append("allPersonalDocuments.photo",this.photo);
      customerFormData.append("allPersonalDocuments.thumbPrint",this.thumbPrint);
      customerFormData.append("allPersonalDocuments.signature",this.signature);
      customerFormData.append("allPersonalDocuments.bankCheque",this.bankCheque);
      customerFormData.append("allPersonalDocuments.salarySlips",this.salarySlips);
      customerFormData.append("propertyInfo.propertyDocuments",this.propertyDocuments);
      customerFormData.append("propertyInfo.priceProofs",this.priceProofs);

      this.service.saveStep3(customerFormData, this.generatedCustomerId).subscribe()
      alert("Step3 saved")
    }

    this.step = this.step + 1
  }
  previousStep(){
    this.step = this.step - 1
  }


  //To save last step of Phase1 of Customer Application
  savePhase1(){

    const customerApplication=JSON.stringify(this.customerApplicationForm.value);

    const customerFormData=new FormData();
    customerFormData.append("customerApplication",customerApplication);
    customerFormData.append("propertyInfo.propertyDocuments", this.propertyDocuments)
    customerFormData.append("propertyInfo.priceProofs", this.priceProofs)

    this.service.saveStep4(customerFormData, this.generatedCustomerId).subscribe()
     alert("Step4 saved")

  }





  totalSaveCustomerApplication() {

    alert("Customer Details Form Submitted");
    const customerApplication=JSON.stringify(this.customerApplicationForm.value);

    const customerFormData=new FormData();
    customerFormData.append("allPersonalDocuments.addressProof",this.addressProof);
    customerFormData.append("allPersonalDocuments.panCard",this.panCard);
    customerFormData.append("allPersonalDocuments.incomeTax",this.incomeTax);
    customerFormData.append("allPersonalDocuments.aadharCard",this.aadharCard);
    customerFormData.append("allPersonalDocuments.photo",this.photo);
    customerFormData.append("allPersonalDocuments.thumbPrint",this.thumbPrint);
    customerFormData.append("allPersonalDocuments.signature",this.signature);
    customerFormData.append("allPersonalDocuments.bankCheque",this.bankCheque);
    customerFormData.append("allPersonalDocuments.salarySlips",this.salarySlips);
    customerFormData.append("propertyInfo.propertyDocuments",this.propertyDocuments);
    customerFormData.append("propertyInfo.priceProofs",this.priceProofs);
    
    customerFormData.append("customerApplication",customerApplication);
    this.service.saveCutomerApplication(customerFormData).subscribe();
    
    //window.location.reload();
  }
  
}