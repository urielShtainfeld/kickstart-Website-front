import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
  transform(items: Array<any>, name: string): Array<any> {
    return items.filter(item => item.name.includes(name));
  }
}
