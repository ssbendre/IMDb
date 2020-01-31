import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {
  transform(data: any, filters: any): any {
    const filteredData = [];
    if (data && filters && data.Title !== '' && data.Title === filters.Title) {
      filteredData.push(data);
    }
    return filteredData;
  }
}
