import { useState, useCallback,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  //useRef hook

  const passwordRef=useRef(null);



  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(Password);
  },
  [Password])

  

  const PasswordGenerator =useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 1; i <= length; i++) {
      let pos = Math.floor(Math.random() * str.length);
      pass = pass + str.charAt(pos);
    }

    setPassword(pass);} ,[length, numberAllowed, characterAllowed,setPassword]);

    useEffect(()=>{
      PasswordGenerator()
    },[length, numberAllowed, characterAllowed,PasswordGenerator])

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 my-8  bg-gray-700 "
      >
        <h1 className="mx-2 text-2xl text-center pt-2  text-white">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full px-4 py-2 my-3 rounded-lg text-gray-800 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={()=>{copyPasswordToClipboard()}}
          className="outline-none w-1/6  px-4 py-2 my-3 bg-blue-500 rounded-lg text-white">
            Copy
          </button>
        </div>
        <div className="flex text-sm  gap-10">
          <div className="flex items-center gap-3 mb-2">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(eventonchange) => {
                setlength(eventonchange.target.value);
              }}
              className="cursor-pointer mt-0.5"
            />
            <label className="text-orange-400 text-md">Length({length})</label>
          </div>
          <div className="flex items-center gap-x-1 mb-2">
            <input
              type="checkbox"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label className="text-orange-400 text-md">Number</label>
          </div>
          <div className="flex items-center gap-x-1 mb-2">
            <input
              type="checkbox"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label className="text-orange-400 text-md">Special</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
