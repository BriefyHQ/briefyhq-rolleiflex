import { Pipe, PipeTransform } from '@angular/core';

/*
 * Deal with locality names.
 * Usage:
 *   value | locality
 * Example:
 *   {{ EMPTY_CITY |  locality}}
 *   formats to: --
*/
@Pipe({
  name: 'locality'
})
export class LocalityPipe implements PipeTransform {

  transform(value: string): any {
    let response = value;
    if ((!value) || (value === 'EMPTY_CITY')) {
      response = '--';
    }
    return response;
  }

}
