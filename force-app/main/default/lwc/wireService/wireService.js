import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/wireService.getAllAccounts'
export default class WireService extends LightningElement {
    @wire(getAllAccounts)
    accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }
}