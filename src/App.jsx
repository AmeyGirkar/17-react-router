import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Componets/Navbar'
import Footer from './Componets/footer'
import Users from './pages/Users'
function App() {
  return (
   <>
   {/* <Home></Home>
   <About></About>
   <Contact></Contact> */}

   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/about" element={<About/>}></Route>
        <Route  path ="/contact" element={<Contact/>}></Route>
        <Route  path ="/user" element={<Users/>}></Route>
      </Routes>
      <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
