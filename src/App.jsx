import React, { useState } from 'react'
import './App.css'
import Header  from './components/Header/Header' 
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
