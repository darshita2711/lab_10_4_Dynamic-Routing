import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes , Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
         <Route path="*" element={<Navigate to="/not-found" replace />} />
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
       <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
