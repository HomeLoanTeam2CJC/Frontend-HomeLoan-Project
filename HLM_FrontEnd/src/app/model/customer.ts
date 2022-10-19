import { AccountDetails } from "./account-details";
import { Address } from "./address";
import { AllPersonalDocuments } from "./all-personal-documents";
import { CibilData } from "./cibil-data";
import { DeligenceReport } from "./deligence-report";
import { EducationalInfo } from "./educational-info";
import { FamilyInfo } from "./family-info";
import { GurantorDetails } from "./gurantor-details";
import { LoanAgreement } from "./loan-agreement";
import { LoanDisbursement } from "./loan-disbursement";
import { Profession } from "./profession";
import { PropertyInfo } from "./property-info";
import { SanctionLetter } from "./sanction-letter";

export class Customer {

    customerId: number;
    customerName: string;
    customerDateOfBirth: string;
    customerAge: number;
    customerGender: string;
    customerEmail: string;
    customerMobileNumber: number;
    customerMobileNumber2: number;
    customerAddress: Address;
    customerAmountPaidForHome: number;
    customerTotalLoanRequired: number;
    educationalInfo: EducationalInfo;
    allPersonalDocuments: AllPersonalDocuments;
    familyInfo: FamilyInfo;
    profession: Profession;
    cibilDetails: CibilData;
    accountDetails: AccountDetails;
    propertyInfo: PropertyInfo;
    gurantorDetails: GurantorDetails;
    deligenceStatus: string;
    deligenceReport: DeligenceReport;
    doReportBmResponseStatus: string;
    doReportBmResponse: string;
    sanctionLetterStatus: String;
    sanctionLetter: SanctionLetter;
    customerAcceptanceStatus: string;
    loanAgreementStatus: string;
    loanAgreement: LoanAgreement;
    loanAgreementBmSignStatus: string;
    // loanAgreementCustomerSignStatus: string;
    loanDisbursementStatus: string;
    loanDisbursement: LoanDisbursement;

}
