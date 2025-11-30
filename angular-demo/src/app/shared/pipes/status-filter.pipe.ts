import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statusFilter' })
export class StatusFilterPipe implements PipeTransform {
  transform<T extends { status?: string }>(
    items: T[],
    status: string
  ): T[] {
    if (!status || status === 'all') return items;
    return items.filter(i => i.status === status);
  }
}
