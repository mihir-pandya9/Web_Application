import { useEffect, useState } from "react";
import first from './DieatImage/first.jpeg';
import second from './DieatImage/second.jpeg';
import third from './DieatImage/third.jpeg';
import fourth from './DieatImage/fourth.jpeg';
import fifth from './DieatImage/fifth.jpeg';
import { NavLink } from 'react-router-dom'

const DietPlan = () => {


  const [currDiet, setDiet] = useState(0);

  const DietData = [
    {
      text: "Unlock your body's potential with our Balanced Boost plan - where wholesome nutrition meets delicious satisfaction.",
      img: first,
    },
    {
      text: "Revitalize your routine with our Plant-Powered Plan - harnessing the vitality of nature for a healthier you.",
      img: second,
    },
    {
      text: "Ignite your metabolism with our Lean & Green Plan - sculpting bodies and empowering minds.",
      img: third,
    },
    {
      text: "Transform your relationship with food through our Clean Cuisine Plan - nourishing your body, inspiring your soul.",
      img: fourth,
    },
    {
      text: "Discover the joy of mindful eating with our Mindful Munchies Plan - savoring every bite, guilt-free.",
      img: fifth
    }
  ];

  const changeIndex = () => {
    if (currDiet === DietData.length - 1) {
      setDiet(0);
    } else {
      setDiet(currDiet + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(changeIndex, 5000);
    return () => clearTimeout(timer);
  }, [currDiet]);

  return (
    <div className="p-5 mt-16 w-11/12 ml-20 ">
      <h1 className="text-5xl font-Oswald">Diet Plan</h1>
      <div className="max-h-76 w-full mt-5 font-Montserrat flex justify-around shadow-2xl border-2 p-4">
        <div className="relative top-10 h-fit w-4/6 transition-transform duration-300">
          <h1 className="font-bold mb-5 text-3xl font-Oswald flex flex-wrap">
            {DietData[currDiet].text}
          </h1>
          <button className="absolute  top-28 cursor-pointer p-2 text-xl rounded-xl transition-all duration-300 ease-in bg-stone-800  hover:bg-red-600 text-white"><NavLink to="/diet">
            View Plan </NavLink>
          </button>
        </div>
        <div className="transition-all duration-300 flex h-72 w-96">
          <img
            className="object-fit w-full h-full rounded-2xl"
            src={DietData[currDiet].img}
            alt="Diet Image"
          />
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
