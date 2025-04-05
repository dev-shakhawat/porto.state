import React from "react";

import PropertyCard from "../common/PropertyCard";

import bnrtwo from "../../assets/bnrtwo.jpg";

const Banner = () => {
  return (
    <div className=" relative  ">
      {/* slider */}
      <div className="grid">
        <div className="w-full relative ">
          <img src={bnrtwo} alt="bnrtwo" />
          <div className="absolute top-30 left-[20%]    ">
            <PropertyCard
              note={"featured"}
              price={"1.250.000"}
              title={"South Miami"}
              sq={500}
              baths={2}
              beds={3}
              btnview={true}
              notestyle={"absolute top-[-10px] right-[-130px] bg-[#43CB83] py-3 font-semibold text-[14px] leading-[24px] uppercase text-white w-[100%] text-center rotate-[50deg]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
