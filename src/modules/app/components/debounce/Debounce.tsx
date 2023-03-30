import React, { useState, useMemo, useEffect } from 'react';
import { Accordion } from '../../../../components/accordion/Accordion';
import { List, ValuesListItem } from './List';
import { useDebounce } from './useDebounce';
import { putItem } from './mock';
const DEBOUNCE_TIME = 1000;

export const Debounce: React.FC = () => {
  const [valuesList, setValuesList] = useState<ValuesListItem[]>([]);
  // const [inputValue, setInputValue] = useState('');
  // const debounceValue = useDebounce(inputValue, DEBOUNCE_TIME);

  const debounce = (f: (value: any) => void, ms: number) => {
    let handler: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: any) {
      clearTimeout(handler);

      handler = setTimeout(() => {
        f.apply(this, args);
      }, ms);
    };
  };

  const fetchItems = (value: string) => {
    putItem(value).then((listItem) => {
      setValuesList(listItem as ValuesListItem[]);
    });
  };

  const debounceFetch = useMemo(() => debounce(fetchItems, DEBOUNCE_TIME), []);

  const deleteItem = (key: string) => {
    setValuesList(valuesList.filter((e) => e.id !== key));
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    debounceFetch(value);

    // Либо использовать хук
    // setInputValue(value);
  };

  // Либо использовать хук
  // useEffect(() => {
  //   fetchItems(debounceValue);
  // }, [debounceValue]);

  return (
    <Accordion title="Debounce">
      <input onChange={onInputChange} />
      <List deleteItem={deleteItem} valuesList={valuesList} />
    </Accordion>
  );
};
