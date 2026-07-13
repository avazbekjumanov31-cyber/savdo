import React from 'react'
import { Link } from 'react-router-dom'

const Kirish = () => {
  return (
   <>
   <div className='fixed inset-0 bg-black/40 flex items-center justify-center cursor-pointer'>
   <div className='bg-white w-450px rounded-2xl p-8 relative '>
   <Link to={"/"}> <button className=' cursor-pointer hover:bg-gray-400'>X</button></Link>
    <h1>Uzum Market'ga kirish</h1>
    <input type="number" placeholder='+998 00 000-00-00' className='px-5 border rounded-2xl'/> <br />
    <button className='w-80 bg-fuchsia-500'>Kodni olish mana</button>
    <p className='text-fuchsia-500'>UzumID nima ?</p>
   </div>
   </div>
   </>
  )
}

export default Kirish

