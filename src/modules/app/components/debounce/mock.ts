import { v4 } from 'uuid';
import { ValuesListItem } from './List';

const list: ValuesListItem[] = [];

export const putItem = (value: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      list.unshift({ value, id: v4() });
      resolve([...list]);
    }, 1000);
  });
