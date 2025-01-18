import HomePage from "./pages/Home";
import { Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <div className="h-screen bg-custombg">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>

  )
}

export default App
