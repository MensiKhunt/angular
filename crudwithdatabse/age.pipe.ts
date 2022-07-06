import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({

  name: 'age'

})

export class AgePipe implements PipeTransform {



  transform(value: Date): string {

    let today = moment();

    let bitrhdate = moment(value);

    let years = today.diff(bitrhdate,'years');

    let html:string=years+"yr - ";

    html+=today.subtract(years,'years').diff(bitrhdate,'months')+"mo";

    return html;

  }



}