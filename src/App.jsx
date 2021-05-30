import React, { useState } from 'react'
import './App.css'
import Header  from './components/Header/Header' 
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <h2>Hello World!</h2>
    </div>
  )
}

export default App
