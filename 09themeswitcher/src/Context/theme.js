import {createContext,useContext} from 'react'

export const ThemeContext= createContext({
    thememode:"light",
    darktheme:()=>{},
    lightheme:()=>{}
 })//Create Context
 //Above are the deafult values which are used when no user tries use to use them outside the provider


export const Themeprovider=ThemeContext.Provider // Context provider


export default function useTheme(){
    return useContext(ThemeContext)//Consume context using(useTheme())
}