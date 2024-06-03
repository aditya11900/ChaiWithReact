import { useState } from 'react'
import Card from './component/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card  username="kalu" btnText="read more"/>
      <Card username="kumar" btnText ="vist me" />
    </>
  )
}

export default App
