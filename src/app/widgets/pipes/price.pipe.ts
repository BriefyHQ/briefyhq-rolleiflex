import { Pipe, PipeTransform } from '@angular/core';

/*
 * Get a value in cents and return it as an integer
 * Usage:
 *   value | price
 * Example:
 *   {{ 20000 |  price}}
 *   formats to: 200.00
*/
@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): any {
    const options = {
      minimumFractionDigits: 2
    };
    // TODO: Harcoded Locale
    return (value / 100).toLocaleString('en-GB', options);
  }

}
