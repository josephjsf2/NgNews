import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publishAt'
})
export class PublishAtPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
