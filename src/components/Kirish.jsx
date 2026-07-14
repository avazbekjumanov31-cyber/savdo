import React from 'react'
import { Link } from 'react-router-dom'

const Kirish = () => {
  return (
   <>
   <div className='fixed inset-0 bg-black/40 flex items-center justify-center cursor-pointer font-bold'>
   <div className='bg-white w-450px rounded-2xl p-8 relative '>
    <div className='flex gap-30'>
      <h4 className='ml-30 text-fuchsia-600 font-bold text-2xl'>UzumId</h4>
<Link to={"/"}> <button className=' cursor-pointer hover:bg-gray-400 ml- bg-gray-300 rounded-2xl w-6 text-gray-500'>X</button></Link>
    </div>
    <h1 className='ml-20 mb-10 '>Uzum Market'ga kirish</h1>
    <input type="number" placeholder='+998 00 000-00-00' className='px-5 border rounded-2xl mb-10 ml-2 h-15 w-80'/> <br />
    <button className='w-80 h-10 bg-fuchsia-500 rounded-2xl cursor-pointer  hover:bg-fuchsia-400 text-white  ml-2 mb-5'>Kodni olish </button>
    <p className='text-fuchsia-500 ml-28'>UzumID nima ?</p>
   </div>
   </div>
   </>
  )
}

export default Kirish

