import React from 'react';

export interface ValuesListItem {
  value: string;
  id: string;
}

interface IList {
  valuesList: ValuesListItem[];
  deleteItem: (value: string) => void;
}

export const List: React.FC<IList> = ({ valuesList, deleteItem }) => (
  <div>
    {valuesList.map((e) => (
      <div key={e.id} onClick={() => deleteItem(e.id)}>
        {e.value}
      </div>
    ))}
  </div>
);
