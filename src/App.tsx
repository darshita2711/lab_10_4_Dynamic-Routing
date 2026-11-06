import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

         <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
      </ProtectedRoute>
    }
  />
      </Routes>
    </div>
  )
}

export default App
