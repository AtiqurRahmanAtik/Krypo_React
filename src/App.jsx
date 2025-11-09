
import { Route, Routes } from 'react-router'
import './App.css'

import MainLayout from './Components/MainLayout'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import NotFound from './Components/NotFound'

function App() {


  return (
    <>



    <Routes>
  <Route path='/' element={<MainLayout/>} >
    
    <Route index element={<Home/>}></Route>
    <Route path='/aboutUs' element={<AboutUs/>}></Route>



   

</Route>

 {/* NotFound Page */}
    <Route path='*' element={<NotFound/>}></Route>

</Routes>


    </>
  )
}

export default App
