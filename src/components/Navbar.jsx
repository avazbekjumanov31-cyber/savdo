import React from 'react'
import { BsMenuButton } from "react-icons/bs";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Homecard } from './Home.card';
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
    <nav className='flex justify-around bg-gray-200'>
    <div className='flex '>

      <select className='' name="" id="">
        <option value="">Tashkent</option>
         <option value="">Jizzax</option>
          <option value="">Buxoro</option>
           <option value="">Navoiy</option>
            <option value="">Urganch</option>
             <option value="">Qoraaqalpoq</option>
         <option value="">Sirdaryo</option>
          <option value="">Farg'ona</option>
           <option value="">Namangan</option>
            <option value="">Surxondaryo</option>
             <option value="">Andijon</option>
              <option value="">Xorazm</option>
      </select>
      <Link to="/Footer" className="mr-150 cursor-pointer">
    Topshiriq punktlari
  </Link>
    </div>
    <Link to="/Navbar" className=' cursor-pointer text-fuchsia-600 hover:text-fuchsia-700'>
     Sotuvchi bo‘lish
    </Link>
      <Link to="/topshirish" className='cursor-pointer text-fuchsia-600 hover:text-fuchsia-700'>
           Topshirish punktini ochish
      </Link>
     <Link to="/savol" className=' cursor-pointer'>
           Savol-javob
     </Link>
     <Link to="/buyurtma" className=' cursor-pointer'>
           Buyurtmalarim
     </Link>
      
      <select name="" id="">
        <option value="">UZB</option>
        <option value="">RUS</option>
      </select>
    </nav>
    <div className='flex justify-around mt-10'>
     <Link to="/"> <img className='w-50' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Uzum-Market-Logo.png/1280px-Uzum-Market-Logo.png" alt="" /></Link>
      <button className=' text-fuchsia-800 bg-fuchsia-300 p-2 cursor-pointer hover:bg-fuchsia-400 w-25 h-10 rounded-xl flex justify-center items-center gap-2 '><BsMenuButton  className='mt-2 ml-2.5'/>Katalog</button>
      <div className='flex'>
  <input className='w-120 h-10 border px-5 rounded-tl-2xl rounded-bl-2xl' type="text  " placeholder='Mahsulotni qidirish' />
  <button className='border w-15 h-10 justify-center items-center  bg-gray-300 rounded-br-2xl rounded-tr-2xl'><IoSearch  className='ml-5'/></button>
      </div>
     

      <Link to="/Kirish" className='flex justify-center items-center gap-4 p-2  w-25 h-10 rounded-xl  cursor-pointer hover:bg-gray-200'><FaUserAlt/>Kirish</Link>
      <Link to="/saralangan" className='flex justify-center items-center gap-4 p-2  w-25 h-10 rounded-xl  cursor-pointer hover:bg-gray-200'><FaHeart /> Saralangan</Link>
      <Link to="/Savat" className='flex justify-center items-center gap-4 p-2  w-25 h-10 rounded-xl  cursor-pointer hover:bg-gray-200'><IoBag  />Savat</Link>
    </div>
    <div className='flex justify-around mt-10 '>
     <button className='text-gray-500 cursor-pointer hover:text-black'>Mebel</button>
     <button className='text-gray-500 cursor-pointer hover:text-black'>Turizim, baliq ovi va ovchilik</button>
     <button className='text-gray-500 cursor-pointer hover:text-black'>Elektironika</button>
     <button className='text-gray-500 cursor-pointer hover:text-black'>Maishiy texnika</button>
     <button className='text-gray-500 cursor-pointer hover:text-black'>Kiyim</button>
     <button className='text-gray-500 cursor-pointer hover:text-black'>Poyabzal</button>
     <button className='text-gray-500 cursor-pointer hover:text-black'>Aksesuarlar</button>
     <button className='text-gray-500 cursor-pointer hover:text-black'>Go'zallik va parvarish</button>
     <button className='text-gray-500 cursor-pointer hover:text-black'>Salomatlik</button>
     <select className=" cursor-pointer" name="" id="">
      <option  value="">yana</option>
     </select>
    </div>


    </>
  )
}

export default Navbar