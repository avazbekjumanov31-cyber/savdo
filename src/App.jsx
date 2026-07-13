import React from 'react'
import {  Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Savol from './components/Savol'
import Navbar from './components/Navbar'
import Tagi from './components/Tagi'
import Boglanish from './components/Boglanish'
import Kabinet from './components/Kabinet'
import Soting from './components/Soting'
import Kelishuv from './components/Kelishuv'
import Punkt from './components/Punkt'
import Kirish from './components/Kirish'
import Vakansiya from './components/Vakansiya'
import Topshirish from './components/Topshirish'
import Buyurtma from './components/Buyurtma'
import Card from './components/Card'


const App = () => {
  return (
    <div>
       <Navbar/>
      
     <Routes>
      
      <Route path='/Kirish' element={<Kirish/>}/>
      <Route path='/Card' element={  <Card/>}/>
      <Route path='/Footer'  element={<Footer/>}/>
      <Route path='Vakansiya' element={<Vakansiya/>}/>
      <Route path='Boglanish' element={<Boglanish/>}/>
      <Route path='/Soting' element={<Soting/>}/>
      <Route path='/Kabinet' element={<Kabinet/>}/>
      <Route path='/Punkt' element={<Punkt/>}/>
      <Route path='/Topshirish' element={<Topshirish/>}/>
      <Route path='/Savol' element={<Savol/>}/>
      <Route path='/Buyurtma' element={<Buyurtma/>}/>
      
     </Routes>
    <Tagi />
    <Kelishuv/>
    
    </div>
    
  )
}

export default App