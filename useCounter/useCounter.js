import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => setCounter((current) => current + value);

  const decrement = (value = 1) => {
    if (counter === 0) return;
    //setCounter(counter - value); esto esta bien pero para que tambien funcione en la prueba se hace con el current
    setCounter((current) => current - value);
  };

  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
