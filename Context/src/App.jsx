import React from 'react'
import { useState } from 'react'
import { ContextProvider } from '../contexxt/CounterContext'
import Display from './Display';
import Button from './Button';

function App() {
  const [count,setCount] = useState(0);
  return (
    <ContextProvider value={{count,setCount}}>
      <Display></Display>
      <Button></Button>
    </ContextProvider>
  )
}

export default App
