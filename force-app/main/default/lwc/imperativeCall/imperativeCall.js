import { LightningElement, track} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import getAllAccounts from '@salesforce/apex/imperativeService.getAllAccounts'

export default class ImperativeCall extends LightningElement {
    @track numberOfRecords;
    @track accounts;


    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    inputChangeHandler(event){
        this.numberOfRecords = event.target.value;
    }

    getAccounts(){
        getAllAccounts({numberOfRecords:this.numberOfRecords}).then(response=>{
                this.accounts=response;
                const toastEvent = new ShowToastEvent({
                    title:'Accounts Loaded',
                    message: this.numberOfRecords+' Accounts fetched from server',
                    variant:'success'
                });
                this.dispatchEvent(toastEvent);
        }).catch(error => {
            console.error('Error in getting Accounts', error.body.message);  
            const toastEvent = new ShowToastEvent({
                title:'Error',
                message: error.body.message,
                variant:'error'     
         });
            this.dispatchEvent(toastEvent);
        });

}}