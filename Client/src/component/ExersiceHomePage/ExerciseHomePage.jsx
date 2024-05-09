import { useState } from 'react';
import first from './Exercises_gif/first_files/first.gif';
import second from './Exercises_gif/first_files/second.gif';
import third from './Exercises_gif/first_files/third.gif';
import { NavLink } from 'react-router-dom';

const ExerciseHomePage = () => {

  const [hoverSize, sethoverSize] = useState(false);

  const workoutBanner = [
    {
      img: first,
      title: "First Exercise",
      text: "This is the first exercise description.",
    },
    {
      img: second,
      title: "Second Exercise",
      text: "This is the second exercise description.",
    },
    {
      img: third,
      title: "Third Exercise",
      text: "This is the third exercise description.",
    }
  ];

  const onHover = (e) => {
    sethoverSize(true);
    console.log(e.target.key);
  }

  const onHoverLeave = (e) => {
    sethoverSize(false);
    console.log(e.target.value);
  }

  return (
    <div className='p-5 mt-16 w-11/12 ml-20 relative h-full'>
      <h1 className="text-5xl font-Oswald">Exercises</h1>
      <h2 className="text-3xl mt-5 font-Oswald">Exercise is essential for physical fitness, weight management, and disease prevention. It also boosts mental health by reducing stress and improving mood. Additionally, regular exercise promotes longevity and overall well-being.</h2>
      <div className='flex h-1/3 mt-5 shadow-inner'>
        {workoutBanner.map((data, index) => (
          <div key={index} className='mr-5 h-fit relative'>
            <div className='group'>
              <img className={`rounded-2xl border shadow-2xl transition-all duration-300 ${hoverSize ? 'scale-100' : 'scale-95'}`} src={data.img} alt={`Exercise ${index + 1}`} />
              <div className='absolute top-0 left-0 rounded-2xl transition-all duration-300 scale-95 w-full text-white h-full bg-black/50 opacity-0 flex items-center justify-center  group-hover:opacity-100 hover:scale-100 text-2xl font-Oswald' onMouseEnter={onHover} onMouseLeave={onHoverLeave}>
                <div className='relative top-20 -left-8'>
                  <h1>{data.title}</h1>
                  <p>{data.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NavLink to="/workout">
        <button className='absolute right-12 bottom-28 cursor-pointer p-2 text-xl rounded-xl transition duration-300 ease-in bg-stone-800  hover:bg-red-600 text-white'>Know More</button></NavLink>
    </div>
  );
};

export { ExerciseHomePage };
