import { computed, Injectable, signal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class TableCardService<T> {

  private _data = signal<T[]>([]);

  pageIndex = signal(0);
  pageSize = signal(10);

  sortActive = signal<keyof T | ''>('');
  sortDirection = signal<'asc' | 'desc' | ''>('');

  constructor() { }

  setData(data: T[]) {
    this._data.set(data);
  }

  setPage(event: PageEvent) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }

  setSort(event: Sort) {
    this.sortActive.set(event.active as keyof T);
    this.sortDirection.set(event.direction);
  }

  private sortedData = computed(() => {
    const data = [...this._data()];
    const active = this.sortActive();
    const direction = this.sortDirection();

    if (!active || !direction) return data;

    return data.sort((a: any, b: any) => {
      const v1 = a[active];
      const v2 = b[active];

      if (v1 === v2) return 0;

      const result = v1 < v2 ? -1 : 1;
      return direction === 'asc' ? result : -result;
    });
  });

  readonly paginatedData = computed(() => {
    const data = this.sortedData();
    const start = this.pageIndex() * this.pageSize();
    return data.slice(start, start + this.pageSize());
  });

  get dataForTable() {
    return this.paginatedData();
  }

  get dataForCards() {
    return this.paginatedData();
  }

  totalCount = computed(() => this._data().length);
}
