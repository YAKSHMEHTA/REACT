import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const[userName,setUsername] = useState('');
    const[Password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({userName,Password})

    }

  return (
    <div>
      <h2>Log In</h2>
      <input value={userName}  type="text" placeholder='Username' 
        onChange={(e) =>setUsername(e.target.value)}
      />
      <input value={Password} type="text" placeholder='Password'
      onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}  >Submit</button>
    </div>
  )
}

export default Login
