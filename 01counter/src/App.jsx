import { useState } from 'react'
import './App.css'

function App() {

const [counter,setCounter]=useState(1)

const addValue=()=>{
     let counter1=counter+1;
     if(counter===5)
        return;
    setCounter(counter1)
  }

  function removeValue(){
    let counter1=counter-1;
    if(counter===0)
      return;
    setCounter(counter1)
    //remember counter update after counter1 from above method setCounter(counter1)
  }
  

  return (
    <>
    <h1>Chai aur React | Shubham</h1>
    <h2>Counter Value:{counter}</h2>
    <button
    onClick={()=>{addValue()}}>Add Value</button>
    <br />
    <br/>
    <button onClick={removeValue}>Remove Value</button>
    {/* onClick={removeValue()}	Call immediately ❌
    onClick={removeValue}	Call when clicked✅ */}
    </>
  )
}

export default App
