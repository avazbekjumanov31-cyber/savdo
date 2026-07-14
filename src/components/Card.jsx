import React from 'react'
import { Homecard } from './Home.card'
import { FaRegHeart } from "react-icons/fa";

const Card = () => {
  return (
    <>
    <nav className='flex justify-around '>

    <div className=' grid-cols-4 gap-5 grid   mt-10 w-300  '>
      {Homecard.map((item)=>(
      <div key={item.id} className='cursor-pointer hover:bg-amber-50 rounded-2xl'>
  <div className="relative overflow-hidden rounded-2xl group">
    <div className="absolute top-3 right-3 bg-white rounded-full p-2 cursor-pointer z-50 ">
     <Link to="/Yurakcha"> <FaRegHeart /></Link>
    </div>

    <img
      src={item.img}
      alt=""
      className="w-71 h-80 transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <p className='mt-5'>{item.narxi}</p>
  <p className='bg-yellow-300 w-35'>{item.oyiga}</p>
  <p>{item.malumot}</p>
  <p>{item.malumot2}</p>
  <p>{item.sharh}</p>

  <button className='bg-fuchsia-500 w-71 h-10 cursor-pointer hover:bg-fuchsia-400 rounded-2xl text-white'>
    {item.buton}
  </button>
</div>
        
      ))}
    </div>
    </nav>
  
    </>
  )
}

export default Card