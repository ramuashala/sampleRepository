import { LightningElement, track } from 'lwc';

export default class CondRendering extends LightningElement {
    @track displayDiv = false;

    @track cityList = ['Hyderabad','Mumbai','Bengaluru','Chennai','Goa','Bhuvaneshwar'];

    setdisplayDivtrue(event){
        this.displayDiv = event.target.checked;
    }
}