import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <h1>Dynamic Blog Application</h1>
      <p>Welcome to our blog!</p>
    </div>
  )
}

export default App
