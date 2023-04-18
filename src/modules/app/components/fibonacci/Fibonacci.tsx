import React, { useMemo, useState } from 'react';
import { Accordion } from '../../../../components/accordion/Accordion';

export const Fibonacci: React.FC = () => {
  const [fibonacci, setFibonacci] = useState(0);
  const inputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFibonacci(Number(value));
  };

  const fibonacciResult = useMemo(() => {
    let result = 0;
    let prevValue = 0;
    let nextValue = 1;
    let i = fibonacci;

    while (i > 0) {
      result = prevValue + nextValue;
      prevValue = nextValue;
      nextValue = result;
      i--;
    }

    return result;
  }, [fibonacci]);

  return (
    <Accordion title="Fibonacci">
      <input type="number" onChange={inputNumber} />
      <div>Fibonacci: {fibonacciResult}</div>
    </Accordion>
  );
};
