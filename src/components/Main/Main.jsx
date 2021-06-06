import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import {Switch , Route } from 'react-router-dom'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Projects' component={Projects}/>
      </Switch>
    </main>
  )
}

export default Main
