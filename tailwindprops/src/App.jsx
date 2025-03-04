import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const myObj = {
    username: "saurabh",
    age: 24
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="chaiaurcode" btnText="Click Me" someobj={myObj} />
      <Card username="chaiaurreact" />
    </>
  )
}

export default App
