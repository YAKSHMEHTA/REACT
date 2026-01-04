import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authServices from './appwrite/auth'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <div>
        <h1>THE BLOG SITE</h1>
      </div>
    </>
  )
}

export default App