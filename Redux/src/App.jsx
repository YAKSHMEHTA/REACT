import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { byten, decrement, increment } from './redux/feature/CounterSlice'

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const [num, setnum] = useState(2);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={()=>{
          dispatch(increment())
        }} >INCREMENT</button>
        <button onClick={()=>{
          dispatch(decrement())
        }} >DECREMENT</button>
        <input 
        type="number"
        value={num}
        onChange={(e)=>{
          setnum(e.target.value)
        }}
        />
        <button onClick={()=>{
          dispatch(byten(Number(num)))
        }}>INCREASE BY 10</button>
      </div>
    </>
  )
}

export default App
