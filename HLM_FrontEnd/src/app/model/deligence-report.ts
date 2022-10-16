import { FieldInvestigation } from "./field-investigation";
import { FinancialCheck } from "./financial-check";
import { TechnicalCheck } from "./technical-check";

export class DeligenceReport {
    deligenceReportId:number;
    finacialCheck:FinancialCheck;
    fieldInvestigation:FieldInvestigation;
    technicalCheck:TechnicalCheck;
}
