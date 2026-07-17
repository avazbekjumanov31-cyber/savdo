import React from 'react'
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineGppGood } from "react-icons/md";
import { PiLightning } from "react-icons/pi";
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



  <div className='bg-black text-white rounded-tl-4xl rounded-tr-4xl h-250'>
    <div className=''>
<h1 className='text-white text-6xl ml-50'>Birinchi oydanoq pul ishlashni boshlang</h1>

    </div>
  
 <div className='mt-10 ml-125 gap-10'>
      <button className='text-black bg-white w-25 h-8 rounded-2xl' >Toshkent</button>
      <button className='bg-gray-700 ml-7 w-35 h-8 rounded-2xl'>Yirik shaharlar</button>
      <button className='bg-gray-700 ml-7 w-65 h-8 rounded-2xl'>Boshqa Shaharlar va qishloqlar</button>
    </div>




     <div className='flex gap-10 font-bold'>
       <div className='bg-gray-900 w-140 ml-20 mt-10 font-bold rounded-4xl h-130'>
      <h1 className='text-4xl ml-10'>Har bir olib ketilgan tovardan</h1>
      <h1 className='text-9xl ml-40 bg-gray-800 w-50 rounded-4xl mt-20'>6%</h1>
      <p className='text-3xl ml-48 mt-10'>daromad</p>
      <p className='ml-20 mt-42 text-gray-500'>Lekin har bir tovar uchun ko'pi bilan 36 000 so'm</p>
    </div>
    <div className='bg-gray-900 mt-10 w-140 rounded-4xl h-63'>
      <h1 className='text-4xl ml-5'>Birinchi 6 oyda haqiqiy <br />
       daromadni kafolatlaymiz</h1>
       <h1 className='ml-5 text-yellow-300 text-5xl mt-5'>17 400 000</h1>
       <p className=' ml-5 text-yellow-300 text-2xl'>so'm oyiga</p>
       <p className=' ml-5 text-gray-500 mt-10'>Bundan kam topsangiz, farqini to'lab beramiz</p>
       <div className='mt-10 bg-gray-900 h-55 rounded-4xl'>
        <h1 className='text-4xl ml-5 '>Ochilish bonusi</h1>
        <div className='mt-10 ml-5 flex'>
 <p className='text-5xl text-yellow-300'> 6 100 000 </p>
 <p className='text-yellow-300 mt-5 text-2xl ml-2'>so'm</p>
        </div>
        <div className='flex'>
  <p className='mt-7 ml-5'>Topshirish punkti 25 kun ichida ochilganda</p>
  <img className='w-40 ml-10 mb-' src="https://pngimg.com/uploads/gift/gift_PNG100383.png" alt="" />
        </div>
    

       </div>
    </div>
     </div>
  <div className='mt-20'>
    <h1 className='ml-120 text-4xl'>Har bir bosqichdagi daromadingiz</h1>
    <div className='flex ml-20   mt-10'>
      <div>
      <GrStatusGood className='text-4xl ml-90'/>
      <p className='text-2xl mr-5 ml-85'>Ochilish</p>
      <p className='text-yellow-300 ml-90'>bonus</p>
      </div>
    <div className=' '>
 <MdOutlineGppGood className='text-4xl ml-50'/>
 <p className='text-2xl ml-40'>Birinchi 6 oy</p>
 <p className='text-yellow-300 ml-50'>kamida </p>
 <p className='ml-44 text-yellow-300 '>
17,4 mln so'm</p>
    </div>
     <div>
      <PiLightning className='text-4xl ml-50'/>
      <p className='text-2xl ml-47'>7+ oy</p>
      <p className='text-yellow-300 ml-40'>har bir olib ketilgan </p >
      <p className='text-yellow-300 ml-45'>
         tovardan 6%</p>
     </div>
    
    </div>
   

  </div>
   
    
  </div>
  </>
  )
}

export default Topshirish