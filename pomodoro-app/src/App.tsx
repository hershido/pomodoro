import { useState } from 'react'
import style from './App.module.scss'
import {TestComponent} from './components/TestComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TestComponent/>
    </>
  )
}

export default App
