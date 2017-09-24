import { CurrencyPipe } from '@angular/common';
export class TuitionFee {
    public cost: number;
    public periodicity: number;
constructor(private currencyFormater: CurrencyPipe){

}
    get costPerYear(){
        return this.cost * this.installmentPerYear;
    }
    get costToString(){
        return this.currencyFormater.transform(this.cost, 'TND', true) + 'chaque ' + this.installmentPerYear +' mois';
    }
    get installmentPerYear(){
        return (12/this.periodicity);
    }
    get formatedCost(){
        return this.cost/1000;
    }
}
