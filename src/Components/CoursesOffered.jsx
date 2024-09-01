import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animation from "./../assets/Images/animation.png";
import webDev from "./../assets/Images/app.png";
import artInt from "./../assets/Images/artificial.png";
import cybersecurity from "./../assets/Images/cyber-security.png";
import design from "./../assets/Images/design.png";
import distribution from "./../assets/Images/distribution.png";
import game from "./../assets/Images/game-console.png";
import amazon from "./../assets/Images/logistics.png";
import mobile from "./../assets/Images/mobile.png";
import social from "./../assets/Images/social-media.png";
import web from "./../assets/Images/web-design.png";
import threeD from "./../assets/Images/3d-cube.png";

function CoursesOffered() {
    const [animationData, setAnimationData] = useState([]);
    const menu = [
        {
          name: "ML & AI",
          img: artInt,
        },
        {
          name: "Block Chain",
          img: distribution,

        },
        {
          name: "Amazon",
          img: amazon,
        },
        {
          name: "Cyber Security",
          img: cybersecurity,
        },
        {
          name: "Development",
          img: webDev,
        },
        {
          name: "Designing",
          img: web,
        },
        {
            name: "Gaming",
            img: game,
          
        },
        {
            name: "Architecture",
            img: design,
          
        },
        {
            name: "IOS & AND",
            img: mobile,
          
        },
        {
            name: "Marketing",
            img: social,
          
        },
        {
            name: "3D",
            img: threeD,
          
        },
        {
            name: "Animation",
            img: animation,
          
        },
      ];
    useEffect(() => {
        const fetchAnimations = async () => {
            const anim1 = await fetch('https://lottie.host/579b48a9-f129-4053-a525-8338a993a42a/DTVOo1bm4G.json');
            const anim2 = await fetch('https://lottie.host/5a4c2221-a577-49c5-9471-c30fa3af38b4/vLbCOisqL8.json');
            const anim3 = await fetch('https://lottie.host/33ebc574-bdf5-40e9-aefa-ebfee350f845/DxK6doFPUx.json');
            const data1 = await anim1.json();
            const data2 = await anim2.json();
            const data3 =await anim3.json();
            setAnimationData([data1, data2,data3]); // Store both animations in the state
        };

        fetchAnimations();
    }, []);
    return (
        <div>
            <div className='font-bold text-gray-700 text-4xl text-center mt-16'>
                How it works?
            </div>
            <div className='flex justify-center space-x-4'>
                {animationData.map((animationData, index) => (
                    <Lottie
                        key={index}
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: animationData,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                        height={200}
                        width={200}
                    />
                ))}
            </div>
            <div className='grid grid-cols-6 mt-20 w-[1200px] m-auto place-items-center'>
            {menu.map((items) => (
            <div className='shadow-[0_4px_20px_rgba(0,0,0,0.15)] cursor-pointer text-center w-40 h-44 font-semibold border-white rounded-3xl my-4 hover:-translate-y-3 duration-300 transition-all ease-in-out '>
              <img className='m-auto my-7' src={items.img} alt="" />
              {items.name}
            </div>
        ))}
            </div>


        </div>
    );
}

export default CoursesOffered;
