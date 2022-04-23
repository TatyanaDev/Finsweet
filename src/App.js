import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
