import { Address } from "./address";
import { CibilData } from "./cibil-data";

export class EnquiryForm {

    enquiryId: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    email: string;
    mobileno: number;
    panno: string;
    occupation: string;
    address: Address;
    loanPurpose: string;
    nearestBranch: string;
    cibilDetails: CibilData;

}
