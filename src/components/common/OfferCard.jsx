import React from 'react'

const OfferCard = ({title , btnstyle , image , btntxt}) => {
  return (
    <div className='relative'>
        <img src={image} alt="image" className='w-full' />
        <div className="absolute top-0 left-0 w-full h-full bg-primary/80 duration-[.4s] hover:bg-transparent grid place-items-center  ">
           <div className="text-center">
            <h3 className=' text-center text-white font-bold text-[21px] leading-[26px]  '>{title}</h3>
            <button type="button" className={`${btnstyle}   `}   >{btntxt}</button>
           </div>
        </div>
    </div>
  )
}

export default OfferCard