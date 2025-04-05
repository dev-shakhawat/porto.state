import React from 'react'

import PropertyCard from "../common/PropertyCard"
import OfferCard from '../common/OfferCard'

// images
import listing1 from "../../assets/listing1.jpg"
import listing2 from "../../assets/listing2.jpg"
import listing3 from "../../assets/listing3.jpg"
import listing4 from "../../assets/listing4.jpg"
import listing5 from "../../assets/listing5.jpg"
import listing6 from "../../assets/listing6.jpg"
import location1 from "../../assets/bg-locations1.jpg"
import location2 from "../../assets/bg-locations2.jpg"
import location3 from "../../assets/bg-locations3.jpg"


const ForsaleOrRent = () => {

    const SaleRent =[
        {id: 1 , forwhich: "for sale" , price: "1.250.000" , beds: 3 , baths: 2 , sq: 500 , image: listing1 , title: 'South Miami'},
        {id: 2 , forwhich: "for sale" , price: "1.250.000" , beds: 3 , baths: 2 , sq: 500 , image: listing2 , title: 'South Miami'},
        {id: 3 , forwhich: "for sale" , price: "1.250.000" , beds: 3 , baths: 2 , sq: 500 , image: listing3 , title: 'South Miami'},
        {id: 4 , forwhich: "for sale" , price: "1.250.000" , beds: 3 , baths: 2 , sq: 500 , image: listing4 , title: 'South Miami'},
        {id: 5 , forwhich: "for sale" , price: "1.250.000" , beds: 3 , baths: 2 , sq: 500 , image: listing5 , title: 'South Miami'},
        {id: 6 , forwhich: "for sale" , price: "1.250.000" , beds: 3 , baths: 2 , sq: 500 , image: listing6 , title: 'South Miami'},
    ]
  return (
    <div className='py-12'>
        <div className="container">
            <div className="flex justify-between  ">
                <div className="w-[79%]">
                    <h3 className=' font-semibold text-[30.8px] leading-[42px] tracking-[-1.56px]   '>Listing for <span className="text-brand">Sale</span> or <span className="text-brand">Rent</span> </h3>
                    <div className="grid grid-cols-3 gap-5 ">
                        {SaleRent.map((item)=> <PropertyCard image={item.image} price={item.price} title={item.title} beds={item.beds} baths={item.baths} sq={item.sq} note={item.forwhich}  notestyle={"absolute top-5 left-5 font-semibold text-white px-4 py-2 bg-[#1C5FA8] uppercase   "}  />)}
                    </div>
                    <div className="flex justify-center w-full ">
                      <button type="button" className='cmnBtn w-[33.33%] ml-10  '   > view more </button>
                    </div>
                    <h3 className=' font-semibold text-[30.8px] leading-[42px] tracking-[-1.56px] mt-10  '>Exclusive Locations </h3>
                    <div className="grid grid-cols-3 gap-5 mt-5  ">
                        <OfferCard image={location1} title={"Palm Beach"} btnstyle={"py-2 px-4 text-white font-semibold uppercase bg-[#1C5FA8] mt-4   "} btntxt={"91 Properties"}  />
                        <OfferCard image={location2} title={"Fischer Island"} btnstyle={"py-2 px-4 text-white font-semibold uppercase bg-[#1C5FA8] mt-4   "} btntxt={"221 Properties"}  />
                        <OfferCard image={location3} title={"South Miami"} btnstyle={"py-2 px-4 text-white font-semibold uppercase bg-[#1C5FA8] mt-4   "} btntxt={"231 Properties"}  />
                    </div>
                </div>

                {/* speacial offer */}
                <div className="w-[19%]">
                    <h3 className=' font-semibold text-[30.8px] leading-[42px] tracking-[-1.56px] mb-8  '>Speacial offer </h3>

                    <div className="flex flex-col gap-4  ">

                        <OfferCard image={location3} title={"Amazing Houses Collection"} btnstyle={" cmnBtn px-5 mt-5   "} btntxt={"231 Properties"}  />
                        <OfferCard image={location3} title={"Exclusive Condominum"} btnstyle={" cmnBtn px-5 mt-5   "} btntxt={"231 Properties"}   />
                        <OfferCard image={location3} title={"Exclusive Condominum"} btnstyle={" cmnBtn px-5 mt-5   "} btntxt={"231 Properties"}   />
                        <OfferCard image={location3} title={"Exclusive Condominum"} btnstyle={" cmnBtn px-5 mt-5   "} btntxt={"231 Properties"}   />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ForsaleOrRent