import { LightningElement, track } from 'lwc';

export default class SimpleCalci extends LightningElement {

    @track currentResult;
    @track previousResults = [];
    @track showpreviousResults = false;
    numb1;
    numb2;

    numberChangeHandler(event){
        const inputboxName=event.target.name;
        if(inputboxName==='NumberOne'){
            this.numb1=event.target.value;
        } else if(inputboxName==='NumberTwo'){
            this.numb2=event.target.value;
        }
    }

    addHandler(){
        const Num1 = parseInt(this.numb1);
        const Num2 = parseInt(this.numb2);
        this.currentResult = `Result of ${Num1}+${Num2} is ${Num1+Num2}`;
        this.previousResults.push(this.currentResult);
       
    }

    subHandler(){
        const Num1 = parseInt(this.numb1);
        const Num2 = parseInt(this.numb2);
        this.currentResult = `Result of ${Num1}-${Num2} is ${Num1-Num2}`;
        this.previousResults.push(this.currentResult);
    }

    mulHandler(){
        const Num1 = parseInt(this.numb1);
        const Num2 = parseInt(this.numb2);
        this.currentResult = `Result of ${Num1}x${Num2} is ${Num1*Num2}`;
        this.previousResults.push(this.currentResult);
    }

    divHandler(){
        const Num1 = parseInt(this.numb1);
        const Num2 = parseInt(this.numb2);
        this.currentResult = `Result of ${Num1}/${Num2} is ${Num1/Num2}`;
        this.previousResults.push(this.currentResult);
    }

    showPreviousResults(event){
        this.showpreviousResults=event.target.checked;
    }
}