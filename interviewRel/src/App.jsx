import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  // const [multipliedValue, setMultipliedValue] = useState(1)  // here we dont need this line we are doing overengeering here
  // as we can directly use value in multiplybyfive function becase react will re- render the App component when value changes
  
  let multipliedValue = value * 5 //we can use the variable directly cause react will re-render the component when value changes APP component
  
  const multiplybyfive = () => {
    // setMultipliedValue(value * 5)
    setValue(value + 1)
  }

  return (
    <>
      <h1>Main value:{value} </h1>
      <button
      onClick={multiplybyfive}> Click to multiply by 5</button>
      <h2>Multiplied value:{multipliedValue} </h2>
    </>
  )
}

export default App
