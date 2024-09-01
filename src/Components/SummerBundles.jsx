import React from "react";
import dummy from "./../assets/Images/dummy.jpg";

function SummerBundles() {
  const menu = [
    {
      name: "Web Development Course with Industrial Projects",
      courses: "4 Courses",
      price: "PKR10,00",
      material: [
        {
          name: "From Novice to expert, The Complete JavaScript Course 2024!",
          img: dummy,
          price: "PKR7,600",
        },
        {
          name: "The Complete Guide to React (incl Hooks,React Router,Redux)",
          img: dummy,
          price: "PKR8,000",
        },
        {
          name: "Sell Fiverr Gigs Like The Top1% in Freelancing in 2024",
          img: dummy,
          price: "PKR4,500",
        },
        {
          name: "The Complete Bootcamp 2024: Node,js, Express, MongoDB, and More",
          img: dummy,
          price: "PKR13,000",
        },
      ],
    },
    {
      name: "Digital Marketing Mastery Learn for the best",
      courses: "6 Courses",
      price: "PKR8,000",
      material: [
        {
          name: "TripAdvisor, Google My Business, and Local SEO",
          img: dummy,
          price: "PKR5,000",
        },
        {
          name: "YouTube ads and Google ads",
          img: dummy,
          price: "PKR5,000",
        },
        {
          name: "Search Engine Optimization (SEO)",
          img: dummy,
          price: "PKR6,000",
        },
        {
          name: "Advanced Digital Marketing",
          img: dummy,
          price: "PKR6,500",
        },
        {
          name: "LinkedIn Orientation",
          img: dummy,
          price: "PKR5,000",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="font-bold text-gray-700 text-4xl text-center mt-16">
        Limited-Time Summer Course Bundles!
      </div>
      <p className="text-gray-700 text-center mt-4">
        Note : All these bundles have recorded lectures
      </p>
      <div className="flex justify-between">
        {menu.map((bundle, index) => (
          <div
  key={index}
  className="mt-10 mx-2 first:ml-16 last:mr-16 border w-[590px] hover:shadow-2xl cursor-pointer max-h-96 overflow-hidden hover:max-h-[1000px] transition-all ease-in-out duration-500"
>
            <div className="text-center border pt-5 bg-blue-600 text-white ">
              <h2 className="text-xl  font-bold mb-7">{bundle.name}</h2>
              <p className="mb-5">{bundle.courses}</p>
            </div>

            <ul className="m-4 mt-2">
              {bundle.material.map((course, idx) => (
                <li
                  key={idx}
                  className="m-2 pb-4 mt-4 flex items-center border-b"
                >
                  <img src={course.img} className="w-20" alt="" />
                  <div className="flex-1">
                    <p className="font-medium p-5 text-sm">{course.name}</p>
                  </div>
                  <p className="text-gray-400 font-bold text-right">
                    {course.price}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex justify-end p-5">
              <p className="font-semibold">{bundle.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SummerBundles;
