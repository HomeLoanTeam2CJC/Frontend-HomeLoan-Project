import { PropertyAddress } from "./property-address";

export class PropertyInfo {

    propertyId: number;
    propertyType: string;
    propertyArea: string;
    constructionArea: string;
    propertyPrice: number;
    constructionPrice: number;
    propertyAddress: PropertyAddress;
    uploadedpropertyDocuments:any[];
    uploadedpriceProofs:any[];
}
