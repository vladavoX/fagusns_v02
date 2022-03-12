import React from 'react'

import { Navbar } from './components'
import { Header, About, Work } from './container'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
    </div>
  )
}

export default App