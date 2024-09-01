import React, { useState } from 'react'
import logo from "./../assets/Images/logo.png";
import { HiDotsVertical } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
function NavBar() {
    const [toggle,setToggle] = useState(false);
  return (
    <div className=' bg-zinc-100'>
        <ul className='flex'>
            <li><img src={logo}  className='w-32 m-3 mb-7' alt="" /></li>
            <li onMouseEnter={() => setToggle(!toggle)} onMouseLeave={() => setToggle(!toggle)} className='flex text-gray-500 font-semibold mt-[23px] ml-10 text-sm tracking-wider cursor-pointer'><HiDotsVertical className='mt-[3px]'/> CATEGORY
            { toggle? <div className="more-opt absolute left-[195px] top-12 bg-white space-y-2 pl-4 pr-8 pt-3 pb-3 z-10 w-52">
         <ul className='font-thin space-y-4 '>
            <li className='hover:text-blue-600'>AMAZON</li>
            <li className='hover:text-blue-600'>DESIGNING</li>
            <li className='hover:text-blue-600'>DEVELOPMENT</li>
         </ul>
          </div>:null}
            </li>
            <li className='mt-2 ml-4'><input className='p-3 w-[525px] outline-none bg-zinc-100 focus:bg-white' type="text" placeholder='Search courses' /></li>
            <li className=' mt-2'>
              <button className='p-3 bg-blue-700 w-14 border flex items-center justify-center'>
                <CiSearch className=' text-xl text-white' />
              </button>
            </li>
            <li className='text-blue-700 ml-60 mt-5 flex gap-1 cursor-pointer h-7'> <IoPerson className='mt-1'/> Login</li>
            <li className='ml-auto mr-6'>
            <button className='mt-2 p-3 px-9 text-sm rounded bg-blue-600 text-white font-bold h-12 hover:bg-blue-700' >SIGN UP</button>
            </li>        
        </ul>
    </div>
  )
}

export default NavBar