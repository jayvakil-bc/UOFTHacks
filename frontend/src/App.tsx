import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from "./pages/Home";

import './App.css'

function App() {

  return (
    <div className="h-screen bg-custombg">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>

  )
}

export default App
