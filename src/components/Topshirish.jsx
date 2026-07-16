import React from 'react'

const Topshirish = () => {
  return (
  <>
  <div className='bg-indigo-500 h-200'>
<nav className='flex gap-50 bg-indigo-500 text-white h-15'>
    <img className='w-80 text-white ' src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Uzum-Market-Logo.png" alt="" />
    <button>Topshirish punktini qanday ochish mumkin</button>
    <button>Ochish uchun nima qilish kerak</button>
    <button>Brendbuk</button>
  </nav>
  <div className='flex  mt-30 text-white'>
    <div className='ml-30'>
 <h1 className='text-7xl'>Uzum Market <br />
topshirish <br />
punktini oching</h1>
<p className='mt-5 text-2xl'>Ochilishda va ishning birinchi oylarida moliyaviy <br />
 jihatdan yordamlashamiz</p>
 <button className='bg-yellow-300 w-55 h-15 rounded-2xl text-black mt-15 cursor-pointer hover:bg-yellow-500'>Ochilish joynini tanlash</button>
    </div>

<img  src="https://promo.uzum.uz/landings/img/pvz/pvz.webp" alt="" className="animate-bounce w-100 ml-90" />
  </div>
  </div>
  <div className='bg-black text-white rounded-tl-4xl rounded-tr-4xl'>
    <div className=''>
<h1 className='text-white text-6xl ml-50'>Birinchi oydanoq pul ishlashni boshlang</h1>

    </div>
    <div className='mt-10 ml-125 gap-10'>
      <button className='text-black bg-white w-25 h-8 rounded-2xl' >Toshkent</button>
      <button className='bg-gray-700 ml-7 w-35 h-8 rounded-2xl'>Yirik shaharlar</button>
      <button className='bg-gray-700 ml-7 w-65 h-8 rounded-2xl'>Boshqa Shaharlar va qishloqlar</button>
    </div>
    <div>
      <h1>Har bir olib ketilgan tovardan</h1>
      <h1>6%</h1>
      <p>daromad</p>
      <p>Lekin har bir tovar uchun ko'pi bilan 36 000 so'm</p>
    </div>
  </div>
  </>
  )
}

export default Topshirish