import { LightningElement, api, wire, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getCars from '@salesforce/apex/carSearchresultController.getCars';

export default class CarSearchResult extends LightningElement {    
    @api carTypeId;
    @track cars;
    @track selectedCarId;

    @wire(getCars, {carTypeId:'$carTypeId'})
    wiredcars({data,error}){
        if(data){
            this.cars=data;
        }else if(error){
            this.showToast('ERROR',error.body.message,'error');
        }
    }

    showToast(title, message, variant){
        const evnt = new ShowToastEvent({
            title : title,
            message: message,
            variant: variant,
        });
            this.dispatchEvent(evnt);
    }
    
    carSelectHandler(event){
        const carId = event.detail;
        this.selectedCarId = carId;
    }

    get carsFound(){
        if(this.cars){
            return true;
        }
            return false;
    }
}