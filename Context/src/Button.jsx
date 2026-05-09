import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../contexxt/CounterContext'

function Button() {
  const { setCount } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(prev => prev - 1)}>
        Decrement
      </button>
    </div>
  );
}


export default Button
