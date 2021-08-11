import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @ track value = ['Red'];

    options=[
            { label: 'Red Marker', value: 'Red' },
            { label: 'Blue Marker', value: 'Blue' },
            { label: 'Green Marker', value: 'Green' },
            { label: 'Black Marker', value: 'Black' }   
        ];

    @api
    selectCheckbox(checkboxValue){
        const selectedCheckbox = this.options.find(checkbox =>{
            return checkboxValue === checkbox.value;
        } )
        if(selectedCheckbox){
            this.value = selectedCheckbox.value;
            return "Successfully Checked";
        }
            return "No checkbox found";
    }

}