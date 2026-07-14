import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Footer from './Footer'
import Savol from './Savol'
import Navbar from './Navbar'
import Tagi from './Tagi'
import Boglanish from './Boglanish'
import Kabinet from './Kabinet'
import Soting from './Soting'
import Kelishuv from './Kelishuv'
import Punkt from './Punkt'
import Kirish from './Kirish'
import Vakansiya from './Vakansiya'
import Topshirish from './Topshirish'
import Buyurtma from './Buyurtma'
import Card from './Card'
import Saralangan from './Saralangan'
import Savat from './Savat'

function App() {
  const [favorites, setFavorites] = useState([])
  const [cart, setCart] = useState([])

  return (
    <div>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <Card
              favorites={favorites}
              setFavorites={setFavorites}
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/saralangan"
          element={
            <Saralangan
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />

        <Route
          path="/Buyurtma"
          element={
            <Buyurtma
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
  path="/Savat"
  element={
    <Savat
      cart={cart}
      setCart={setCart}
    />
  }
/>
        <Route path="/Kirish" element={<Kirish />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Vakansiya" element={<Vakansiya />} />
        <Route path="/Boglanish" element={<Boglanish />} />
        <Route path="/Soting" element={<Soting />} />
        <Route path="/Kabinet" element={<Kabinet />} />
        <Route path="/Punkt" element={<Punkt />} />
        <Route path="/Topshirish" element={<Topshirish />} />
        <Route path="/Savol" element={<Savol />} />

      </Routes>

      <Tagi />
      <Kelishuv />

    </div>
  )
}

export default App