import React,{createContext,useContext} from 'react'



export  const ThemeContext = createContext({
  themeMode:"light",
  lightTheme: ()=>{},
  blackTheme: ()=>{},
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
  return useContext(ThemeContext)
}
