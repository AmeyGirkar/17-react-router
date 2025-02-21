import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './Componets/Navbar.jsx'
import Footer from './Componets/footer.jsx'
import Users from './pages/Users.jsx'
import UserItems from './pages/UserItems.jsx'
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
        <Route  path ="/users" element={<Users/>}></Route>
        <Route  path ="/users/:userId" element={<UserItems/>}></Route>
      </Routes>
      <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
