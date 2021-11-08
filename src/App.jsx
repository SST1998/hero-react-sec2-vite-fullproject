import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import Userpage from './Pages/Userpage'
import Postpage from './Pages/Postpage'
import Commnetpage from './Pages/Commnetpage'

function App() {
  return (
    <div className="App">
      <Userpage />
      <Postpage />
      <Commnetpage />
    </div>
  )
}

export default App
