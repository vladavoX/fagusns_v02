import React from 'react'

import { Navbar } from './components'
import { Header } from './container'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
    </div>
  )
}

export default App