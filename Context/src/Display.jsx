import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../contexxt/CounterContext'

function Display() {
  const counterContext = useContext(CounterContext)
  return (
    <div>
      <h1>count : {counterContext.count}</h1>
    </div>
  )
}

export default Display
