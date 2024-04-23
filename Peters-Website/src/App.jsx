import {Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar'
import './App.css'
import Home from "./Components/Home"
import Resume from "./Components/Resume"
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"

function App() {


  return (
    <div>
      <NavBar />
    
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
