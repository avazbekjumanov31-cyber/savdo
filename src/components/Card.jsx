import React from 'react'
import { Homecard } from './Home.card'
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Card = ({ favorites, setFavorites, cart, setCart }) => {

  const toggleFavorite = (item) => {
    const exists = favorites.find(f => f.id === item.id);

    if (exists) {
      setFavorites(favorites.filter(f => f.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };


  const addCart = (item) => {
    const exists = cart.find(c => c.id === item.id);

    if (exists) {
      setCart(cart.filter(c => c.id !== item.id));
    } else {
      setCart([...cart, item]);
    }
  };


  return (
    <nav className='flex justify-around'>
      <div className='grid grid-cols-4 gap-5 mt-10 w-300'>

        {Homecard.map((item)=>(
          <div
            key={item.id}
            className='cursor-pointer hover:bg-amber-50 rounded-2xl'
          >

            <div className="relative overflow-hidden rounded-2xl group">

              <div
                onClick={() => toggleFavorite(item)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 cursor-pointer z-50"
              >
                {
                  favorites.find(f=>f.id===item.id)
                  ?
                  <FaHeart className="text-red-500"/>
                  :
                  <FaRegHeart/>
                }
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


            <button
              onClick={() => addCart(item)}
              className='bg-fuchsia-500 w-71 h-10 cursor-pointer hover:bg-fuchsia-400 rounded-2xl text-white'
            >
              {
                cart.find(c=>c.id===item.id)
                ?
                "Savatda"
                :
                item.buton
              }
            </button>

          </div>
        ))}

      </div>
    </nav>
  )
}

export default Card