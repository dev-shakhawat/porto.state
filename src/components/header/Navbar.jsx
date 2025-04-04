import React from 'react'
import List from '../common/List'
import { IoIosSearch } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {

    const NavItem = [
        {list: "Home"},
        {list: "Properties"},
        {list: "Who We Are"},
        {list: "Contact"},
        {list: "Elements"},
        {list: "Search" , icon: <IoIosSearch className=' text-secondery text-xl hover:text-brand duration-[.4s] mr-2 '/>},
        {list: <FaFacebookF/>},
        {list: <FaXTwitter/>},
        {list: <FaInstagram/>},
    ]
    

  return (
    <div className='py-[26px]'>
        <div className="container">
            <div className="flex justify-between items-center  ">
                <img src="/images/logo.png" alt="logo" className=' w-[123px] '/>
                <div className="">
                    <List listArr={NavItem} boxStyle={"flex gap-6  items-center   "} icon={true} link={"#"} listStyle={"flex items-center  font-semibold text-base leading-[24px] text-primary hover:text-brand duration-[.4s] cursor-pointer  "}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar