import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authServices from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components/import'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authServices.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  if (loading) return <div>Loading...</div>

  return (
    <>
      <div className='min-h-screen flex content-between flex-wrap bg-gray-400'>
        <div className='w-full block'>
          <Header></Header>
          <main>
            
          </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App