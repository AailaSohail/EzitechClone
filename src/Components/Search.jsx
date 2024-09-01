import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import smalllogo from "./../assets/Images/smalllogo.png";
import background from "./../assets/Images/background.png";
function Search() {
  const [isBlurred, setIsBlurred] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div style={{ backgroundImage: `url(${background})` }} className='bg-cover h-screen'>

    <div className='absolute top-[82px] inset-0 h-[645px] bg-blue-900 opacity-35'></div>
    <div className='absolute top-[250px] left-[220px] text-center tracking-wide'>
      <div className={`font-bold text-5xl text-white w-[900px] transition-all duration-500 ${
            isBlurred ? 'blur-sm' : 'blur-none'
          }`}>
    <div className='font-bold text-5xl text-white w-[900px]' >Learn the fundementals with our Experts in <span class="text-sky-500 inline-flex flex-col h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden ml-8">
    <ul className="block animate-text-slide-4 text-left leading-tight [&_li]:block">
        <li>Web Design</li>
        <li>Social Skills</li>
        <li>Marketing</li>
        <li>Programming</li>
        <li aria-hidden="true">Web Design</li>
    </ul>
</span>
</div>
<div className='text-center text-white text-2xl mt-9'>
  Utilize Effective Learning to Reach Your Potential!
</div>
</div>
<div className='relative'>
<input type="text" placeholder='Search courses..' className='mt-9 pl-8 w-[450px] rounded-md outline-none h-14' /> 
<CiSearch className=' text-xl text-gray-400 absolute left-[640px] top-[54px] hover:text-gray-900 cursor-pointer' />
</div>
<div className='text-white text-xl font-medium mt-9 relative'>
  Explore our more useful products <FaHeart className='absolute left-[615px] -top-[-5px]'/>
</div>
<img  className='ml-9' src={smalllogo} alt="" />
  </div>
    </div>
  );
}

export default Search