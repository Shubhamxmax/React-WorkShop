import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Hello from Andrmeda</h1>
        </div>
    )
}               
// const ReactEelment = {

//     type:'a',
//     props:{
//         href:'http://google.com',
//         target: '_blank',
//     },
//     children:'Click me to visit google'

// }  
const anotheruser="Chai aur Code"

const reactElement=React.createElement(
    'a',
    {href:'http://google.com', target:'_blank'},
    'Click me to visit google',
    anotheruser// this is js variable which is used after fully converted into a particular value
)

const anotherElement = 
    <a href='http://google.com' target='_blank'>Click me to visit google</a>


createRoot(document.getElementById('root')).render(
  anotherElement
)
