import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NaviagtionExample extends NavigationMixin(LightningElement){

    onClickHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard_page',
            attributes:{
                url: 'https://google.com'
            }
        });
    }

}