import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPrice'
})
export class ProductPricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    let discount =  value  - (value * (args / 100));
    console.log(discount);
    return discount;
  }

}
