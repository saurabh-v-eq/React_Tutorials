import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const AddValue = ()=>{
    if(counter < 20){
      setCounter(counter + 1) 
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)  // react doesn't update the state immediately, in each call it will add 1 to counter's initial value i.e 0
      // to add four times in counter
      setCounter(prevCounter => prevCounter + 4)  // it will take the last updated value of counter and adds 4 
    }
  }

  const RemoveValue = ()=>{
    if(counter >0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <p>Count is: {counter}</p>
    <button onClick={AddValue}>Increment</button>
    <button onClick={RemoveValue}>Decrement</button>
    </>
  )
}

export default App
