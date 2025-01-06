import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal from './components/Personal'
import Education from './components/Education'
function App() {
  return (
    <>
      <Personal className="component-spacing" />
      <Education className="component-spacing" />
    </>
  )
}

export default App
