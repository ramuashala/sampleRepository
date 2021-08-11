import { LightningElement, track} from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track value;

    selectCheckboxHandler(){
        const childComp = this.template.querySelector('c-public-method-child');
        const returnedMessage = childComp.selectCheckbox(this.value);
        console.log('Returned Message:'+returnedMessage);
    }

    onInputChangeHandler(event){
            this.value=event.target.value;
    }
}