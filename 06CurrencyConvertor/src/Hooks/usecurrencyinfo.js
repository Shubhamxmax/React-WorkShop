//Creating Custom Hook

import { useEffect } from "react";
import { useState } from "react";


function useCurrencyInfo(currency){
    const [data,setData]=useState({})
        useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response)=>{return response.json()})
            .then((res)=>setData(res[currency])) //res.currency not work beacuse currency is a variable
            console.log(data)
        },[currency])
    console.log(data)
    return data

    }

export default useCurrencyInfo