import React from "react";
import List from "../common/List";

import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const TopBar = () => {
  const headerContact = [
    {
      list: "(800) 123-4567",
      icon: <IoCallOutline className=" text-brand text-lg mr-2  " />,
    },
    {
      list: "1234 Porto Street, Los Angeles / LA",
      icon: <IoLocationOutline className=" text-brand text-lg mr-2  " />,
    },
    {
      list: "porto@portotheme.com",
      icon: <CiMail className=" text-brand text-lg mr-2  " />,
    },
  ];
  return (
    <div className="flex justify-center items-center border border-secondery/20 border-opacity-10 py-2">
      <div className="container">
        <div className="flex justify-between items-center  w-full ">
          {/* header contact */}
          <List
            listArr={headerContact}
            icon={true}
            link={"#"}
            boxStyle={"flex  gap-4 max-sm:hidden  "}
            listStyle={
              "flex items-center font-medium text-[12.6px] leading-[24px] text-secondery  "
            }
          />

          <div className="flex gap-7 items-center max-sm:ml-auto">
            <a
              href="#"
              className="text-xs font-bold text-neutral-500 hover:text-brand transition-colors"
            >
              BLOG
            </a>
            <a
              href="#"
              className="text-xs font-bold text-neutral-500 hover:text-brand transition-colors"
            >
              LOGIN/REGISTER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
