import './App.css'
import About from './About'
import Home from './Home'
import Gallery from './Gallery'
import Contact from './Contact'
import Navbar from './Navbar'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import ApiCalls from './ApiCalls'
import './CSS/Navbar.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './Signup'
function App() {
  return (
    <>
      {/* <ApiCalls /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About names="Hari Dharsaun" age={18} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/usestate" element={<UseState/>} />
          <Route path="/useeffect" element={<UseEffect/>} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App