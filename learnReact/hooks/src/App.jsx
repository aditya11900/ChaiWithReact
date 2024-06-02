import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
//  let counter = 5
 const addValue = () => {
   if(counter<30){
     setCounter(prevCounter =>prevCounter + 1) 
    //  setCounter(counter + 1)
    //  setCounter(counter + 1)
    //  setCounter(counter + 1)
    //  setCounter(counter + 1) // this will not work as expected because the value of counter is not updated immediately it is send in pack to react and react will update the value of counter 
    setCounter(prevCounter =>prevCounter + 1) 
    setCounter(prevCounter =>prevCounter + 1) 
    //now this will work as expected because the value of counter is updated immediately and then send to react
    // it gives the prev value of counter and then update the value of counter
   }
 }
 const removeValue=()=>{
    if(counter>0){
      setCounter(counter - 1)
    }
 }

  return (
    <>
     <h1>React</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}>Add value</button>
     <br />
     <button
     onClick={removeValue}>Subtract value</button>
    </>
  )
}

export default App
