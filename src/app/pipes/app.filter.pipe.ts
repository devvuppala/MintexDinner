
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'myCustomFilterPipe',
    pure: true
})

export class MyCustomFilterPipe implements PipeTransform {

    transform(value: any[], textEnteredInSerachBox: string , property: string) {
        let modifiedArray: any[] = [];
        if(value != null && value.length > 1 && textEnteredInSerachBox != null && textEnteredInSerachBox != '') {
            value.forEach((item) => {
                let propertyVale = item[property];
                console.log("Value of name:" + propertyVale + " : " + textEnteredInSerachBox.toUpperCase());
                if(propertyVale.toUpperCase().includes(textEnteredInSerachBox.toUpperCase())) {
                    modifiedArray.push(item);
                }
            })
            return modifiedArray;
        } else {
            return value
        }
    }
}