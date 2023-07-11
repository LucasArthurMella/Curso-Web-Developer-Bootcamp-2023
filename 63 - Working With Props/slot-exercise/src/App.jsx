import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Slots from './Slots'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Slots val1="A" val2="A" val3="A"/>
        <Slots val1="A" val2="A" val3="B"/>
      </div>
  )
}

export default App
