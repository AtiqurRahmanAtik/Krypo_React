
import { Route, Routes } from 'react-router'
import './App.css'

import MainLayout from './Components/MainLayout'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import NotFound from './Components/NotFound'
import Listing from './Components/Listing'
import Blog from './Components/Blog'
import ContactUs from './Components/ContactUs'

function App() {


  return (
    <>



    <Routes>
  <Route path='/' element={<MainLayout/>} >
    
    <Route index element={<Home/>}></Route>
    <Route path='/aboutUs' element={<AboutUs/>}></Route>

    <Route path='/listings' element={<Listing/>}></Route>
    <Route path='/blog' element={<Blog/>}></Route>
    <Route path='/contact' element={<ContactUs/>}></Route>


   

</Route>

 {/* NotFound Page */}
    <Route path='*' element={<NotFound/>}></Route>

</Routes>


    </>
  )
}

export default App
