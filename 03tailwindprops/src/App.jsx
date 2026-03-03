import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componenets/Card'


function App() {
  const [count, setCount] = useState(0)

  let arr=[1,2,3]
  const name="Rahul"

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <br />
      <br />
      <Card username="Chai aur Code" />
      <br />
      <Card username="Hitesh Chaudhary" btntxt="Follow"/>
      
    </>
  )
}

export default App
