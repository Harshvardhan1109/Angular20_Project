import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleList',
  standalone: false
})
export class RoleListPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
