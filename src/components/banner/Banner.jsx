import React from 'react'

import PropertyCard from "../common/PropertyCard"

import bnrtwo from "../../assets/bnrtwo.jpg"

const Banner = () => {
  return (
    <div className=' relative  '>

        {/* slider */}
        <div className="grid">
            <div className="w-full relative ">
                <img src={bnrtwo} alt="bnrtwo" />
                <div className="absolute top-30 left-[20%]    ">
                    <PropertyCard note={"featured"} price={'1.250.000'} title={"South Miami"} sq={500} baths={2} beds={3}   />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner