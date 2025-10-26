import { useState } from "react";

function App(){

  const [color,setColor] = useState('olive');

  return (
    <>
      
  <div style={{backgroundColor : color}} className=" h-screen flex justify-center items-end w-screen">
    <div className="h-10 flex w-150 justify-evenly bg-white mb-5">
      <button onClick={()=>{
        setColor('cyan') ;
      }} className="bg-cyan-300" >CYAN</button>
      <button onClick={()=>{
        setColor('teal')
      }} className="bg-teal-300">TEAL</button>
      <button onClick={()=>{
        setColor('blue')
      }} className="bg-blue-400">BLUE</button>
      <button onClick={()=>{
        setColor('gray')
      }} className="bg-gray-300">GRAY</button>
    </div>  
  </div>
    </>
  )
}

export default App;