import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) {
      return value;
    }
    const resultHeroes = [];
    for (const heroe of value) {
      if (heroe.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultHeroes.push(heroe);
      }
    }
    return resultHeroes;
  }
}
