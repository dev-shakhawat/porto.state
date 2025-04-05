import React from 'react'
import List from '../common/List'

const Footer = () => {

    const Footinfo = [
        {title: "Porto Real Estate" , lists: [{list: "123 Porto Blvd, Suite 100"} , {list: "New York, NY"} , {list: "Phone : 123-456-7890"} , {list: "Email: mail@example.com"}]},
        {title: "Properties" , lists: [{list: "For Sale"} , {list: "For Rent"} ]},
        {title: "Links" , lists: [{list: "Agents"} , {list: "Who We Are"} , {list: "Contact"} ]},
        {title: "Latest Post" , lists: [{list: "Lorem ipsum dolor sit amet."} , {list: "12:55 AM Dec 19th" }]},
    ]
  return (
    <div className=' bg-[#333333] pt-[64px]  '>
        <div className="container">
            <div className="grid grid-cols-4   ">
                {Footinfo.map((item , index)=> (
                    <div key={index}>
                        <h3 className=' font-semibold text-[17px] leading-[27px] tracking-[-0.88px] mb-4  text-white  '>{item.title}</h3>
                        <List listArr={item.lists} listStyle={" text-[12px] leading-[24px] text-secondery py-1  "} />
                    </div>
                ))}
            </div>
        </div>

        {/* copyright */}
        <div className="text-center py-2 border-t border-secondery/50 mt-14    ">
            <p className=" text-[11px] leading-[26px] text-[#999999]  ">© Copyright 2025. All Rights Reserved.</p>
        </div> 
    </div>
  )
}

export default Footer