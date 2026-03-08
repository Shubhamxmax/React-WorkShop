import { useEffect, useState } from "react";
import React from "react"
import {Themeprovider} from "./Context/theme"
import ThemeBtn from "./Components/themebutton";
import Card from "./Components/card";



function App() {

const [thememode,setmode]=useState("light")



const lightheme=()=>{
  setmode("light")

}
const darktheme=()=>{
  setmode("dark")

}

//actual change in theme

useEffect(() => {
  const html = document.documentElement

  html.classList.remove("dark")

  if (thememode === "dark") {
    html.classList.add("dark")
  }
}, [thememode])





  return (
   <Themeprovider value={{thememode,lightheme,darktheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <ThemeBtn/>
      </div>

      <div className="w-full max-w-sm mx-auto">
        <Card/>
      </div>
    </div>
  </div>
</Themeprovider>
  );
}

export default App;
