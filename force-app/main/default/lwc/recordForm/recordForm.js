import { LightningElement, api } from 'lwc';
// using hard-reference
// import NAME_FIELD from '@salesforce/schema/Account.Name';
// import PHONE_FIELD from '@salesforce/schema/Account.Phone';
// import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class RecordForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    // fieldsArray = ['Name', 'Phone', 'Website'];
    // fieldsArray = [NAME_FIELD, PHONE_FIELD, WEBSITE_FIELD];

    handleSuccess(event){
        this.recordId = event.detail.id;
    }
}