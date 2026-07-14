import React from 'react'
import { FaHeart } from "react-icons/fa";

const Savat = ({ cart, setCart }) => {

  const removeCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <nav className='flex justify-around'>
      <div className='grid grid-cols-4 gap-5 mt-10 w-300'>

        {cart.map((item) => (
          <div
            key={item.id}
            className='cursor-pointer hover:bg-amber-50 rounded-2xl'
          >

            <div className="relative overflow-hidden rounded-2xl group">

              <div
                onClick={() => removeCart(item.id)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 cursor-pointer z-50"
              >
                <FaHeart className="text-red-500"/>
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

            <button className='bg-fuchsia-500 w-71 h-10 rounded-2xl text-white'>
              {item.buton}
            </button>

          </div>
        ))}

      </div>
    </nav>
  )
}

export default Savat