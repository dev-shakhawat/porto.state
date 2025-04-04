"use client";
import React from "react";

function PropertyCard({ note, price, title , beds , baths , sq }) {
  return (
    <div className="flex flex-col bg-white h-fit pt-8 rounded-md relative overflow-hidden w-[340px] ">
      <div className="relative w-full  ">
        {note && (
          <h3 className=" absolute top-[-10px] right-[-130px] bg-[#43CB83] py-3 font-semibold text-[14px] leading-[24px] uppercase text-white w-[100%] text-center rotate-[50deg]   ">
            {note}
          </h3>
        )}

        <h2 className="mb-4 text-2xl px-8 pb-6 font-semibold text-primary border-b border-secondery/15  ">
          ${price}
        </h2>
        <div className="px-8 pb-8">
          <h3 className="mb-3 text-[25px] font-semibold leading-[27px] text-primary">{title}</h3>
          <h4 className=" flex justify-between font-bold text-base uppercase leading-[24px] text-secondery  ">
          <span>BEDS: {beds}</span> <span>BATHS: {baths}</span> <span>SQ FT: {sq}</span>
          </h4>
          <button type="button" className="cmnBtn mt-5 pl-4 w-full text-left   ">
            view property
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
