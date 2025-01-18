import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from "./pages/Home";
import TeamPage from "./pages/Team";
import HackPage from "./pages/Dorahacks";

import './App.css'

function App() {

  return (
    <div className="h-screen bg-custombg">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/dorahacks" element={<HackPage />} />
      </Routes>
    </div>

  )
}

export default App
