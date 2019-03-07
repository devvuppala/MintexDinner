import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'myCurrencyConvertor'
})
export class CurrencyConvertorPipe implements PipeTransform{

    transform(value: number, inputCurrency: string, outputCurrency : string) {
        if(inputCurrency == 'usDollar') {
            if(outputCurrency == 'INR') {
                return value * 70;
            } else if(outputCurrency == 'canadaDollar') {
                return value * 0.75;
            }else if(outputCurrency == 'EURO') {
                return value * 1.5;
            }
        } else if(inputCurrency == 'canadaDollar') {
            if(outputCurrency == 'INR') {
                return value * 50;
            } else if(outputCurrency == 'usDollar') {
                return value * 1.25;
            }else if(outputCurrency == 'EURO') {
                return value * 1.9;
            }
        }
    }

}