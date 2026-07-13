import React from 'react'
import { Link } from 'react-router-dom'

const Tagi = () => {
  return (
    <div className="flex justify-around py-10  mt-10">

      <div className="flex flex-col gap-4">
        <h4 className="font-bold">Biz haqimizda</h4>
        <Link to="/topshirish">Topshirish punktlari</Link>
        <Link to="/vakansiya">Vakansiyalar</Link>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-bold">Foydalanuvchilarga</h4>
        <Link to="/boglanish">Biz bilan bog'lanish</Link>
        <Link to="/savol">Savol-Javob</Link>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-bold">Tadbirkorlarga</h4>
        <Link to="/soting">Uzumda soting</Link>
        <Link to="/kabinet">Sotuvchi kabinetiga kirish</Link>
        <Link to="/punkt">Topshirish punktini ochish</Link>
      </div>
       <div>
         <h4 className="font-bold mb-4">Ilovani yuklab olish</h4>
  <div className='flex gap-5'>   
          <a
          href="https://play.google.com/store/apps/details?id=uz.uzum.app"
          
        >
          <img
            className="w-20"
            src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Logo.wine.svg"
            alt=""
          />
        </a>
 <a className='flex' href="https://apps.apple.com/ru/app/uzum-market-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BF%D0%BB%D0%B5%D0%B9%D1%81/id1640483056" 
        >
         <img className='w-20 h-10 mt-2' src="https://cdn.freebiesupply.com/logos/large/2x/available-on-the-app-store-logo-png-transparent.png" alt="" />
        </a>
         </div>
         <div >
 <h4 className="font-bold mb-4">Uzum ijtimoiy tarmoqlarda</h4>
     <div className='flex gap-3'>
     
      <a href="https://www.instagram.com/uzum.market">
      <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0Ep9SKG3s_uu0kzCK-ARlY2QlqmCFm0T-f_BOvZxMg&s=10" alt="" />
     
      </a>
       <a href="https://t.me/uzum_market">
      <img className='w-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/960px-Telegram_2019_Logo.svg.png" alt="" />
      </a>
      <a href="https://www.facebook.com/uzummarket">
      <img className='w-12' src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="" /></a>
      <a href="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA">
      <img className='w-12' src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="" />
      </a>
    </div>
         </div>
         
      
       </div>
   
    </div>
  )
}

export default Tagi