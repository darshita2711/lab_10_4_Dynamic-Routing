import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  )
}

export default App
