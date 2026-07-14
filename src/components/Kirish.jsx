import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Kirish = () => {

  const [phone, setPhone] = useState("+998 ");

  const handlePhone = (e) => {
    let value = e.target.value;

    // +998 o'chib ketmasligi uchun
    if (!value.startsWith("+998 ")) {
      value = "+998 ";
    }

    // faqat 9 ta raqam qabul qilish
    let numbers = value.slice(5).replace(/\D/g, "");

    if (numbers.length > 9) {
      numbers = numbers.slice(0, 9);
    }

    // format: 90 123-45-67
    let formatted = numbers;

    if (numbers.length > 2) {
      formatted = numbers.slice(0,2) + " " + numbers.slice(2);
    }

    if (numbers.length > 5) {
      formatted = numbers.slice(0,2) + " " + numbers.slice(2,5) + "-" + numbers.slice(5);
    }

    if (numbers.length > 7) {
      formatted = numbers.slice(0,2) + " " + numbers.slice(2,5) + "-" + numbers.slice(5,7) + "-" + numbers.slice(7);
    }

    setPhone("+998 " + formatted);
  };


  return (
    <>
      <div className='fixed inset-0 bg-black/40 flex items-center justify-center cursor-pointer font-bold'>
        <div className='bg-white w-450px rounded-2xl p-8 relative'>

          <div className='flex gap-30'>
            <h4 className='ml-30 text-fuchsia-600 font-bold text-2xl'>
              UzumId
            </h4>

            <Link to={"/"}>
              <button className='cursor-pointer hover:bg-gray-400 bg-gray-300 rounded-2xl w-6 text-gray-500'>
                X
              </button>
            </Link>
          </div>

          <h1 className='ml-20 mb-10'>
            Uzum Market'ga kirish
          </h1>

          <input
            type="text"
            value={phone}
            onChange={handlePhone}
            placeholder='00 000-00-00'
            className='px-5 border rounded-2xl mb-10 ml-2 h-15 w-80'
          />

          <br />

          <button className='w-80 h-10 bg-fuchsia-500 rounded-2xl cursor-pointer hover:bg-fuchsia-400 text-white ml-2 mb-5'>
            Kodni olish
          </button>

          <p className='text-fuchsia-500 ml-28'>
            UzumID nima ?
          </p>

        </div>
      </div>
    </>
  )
}

export default Kirish