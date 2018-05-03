import {Pipe, PipeTransform} from '@angular/core';
import {User} from './user';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: User, args?: any): string {
    return `${value.firstName} ${value.lastName}(${value.id})`;
  }

}
