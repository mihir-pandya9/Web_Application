import { useState } from "react";
import PreviousButon from "./PreviousButon";
import NextButton from "./NextButton";
import diet from './Images/diet.jpeg'
import jogging from './Images/jogging.jpeg'
import pushups from './Images/pushups.jpg'
import yoga from './Images/yoga.jpeg'

const Body = () => {

  const [slide, setnextSlide] = useState(0);

  const moveLeft = () => {
    let curruntindex = slide;
    if (curruntindex === 0) {
      setnextSlide(imageData.length - 1);
    }
    else {
      setnextSlide(curruntindex - 1)
    }
    curruntindex = slide;
  }

  const moveRight = () => {
    let curruntindex = slide;
    if (curruntindex === imageData.length - 1) {
      setnextSlide(0);
    }
    else {
      setnextSlide(curruntindex + 1);
    }
    curruntindex = slide;
  }

  const imageData = [
    {
      img: jogging,
      review1: 'Does opacity take place of your healthy life,',
      review2: 'Don\'t know how to stop opacity and get healthy life',
      smallReview: 'Jogging improve cardiovascular health and help prevent obesity.'
    },
    {
      img: pushups,
      review1: 'Exercise is crucial for maintaining optimal physical health, ',
      review2: 'reducing the risk of chronic diseases, and promoting mental well-being. ',
      smallReview: 'Elevate your health and vitality with simple yet effective fitness routines.'
    },
    {
      img: diet,
      review1: 'If your appetite and taste have been affected by illness,',
      review2: 'medications or other health issues, you may have trouble eating and getting proper nutrition.',
      smallReview: 'Get a total diet plane that can prevent your nutrience'
    },
    {
      img: yoga,
      review1: 'Facing a stressful life,',
      review2: 'Don\'t know what to do to overcome this',
      smallReview: 'Join our yoga sessoins and make stress free and focused life'
    }
  ]

  return (
    <>
      <div className="absolute left-0 top-1/3 ml-10 transform -translate-y-1/2 " onClick={moveLeft} >
        <PreviousButon />
      </div>
      <div className="flex h-3/4 m-auto mr-20 ml-14 mt-24 w-11/12 overflow-hidden justify-center"> {/* Set height to auto */}
        <div className="w-11/12 h-auto ml-10 mr-5" >
          <div>
            <img className='w-full scale-100 hover:scale-105 hover:ease-in-out duration-300 mix-blend-darken' src={imageData[slide].img} />
            <div className='z-0 absolute p-3 w-9/12 left-26 bottom-48 text-white font-Oswald'>
              <p className="z-10 cursor-default font-Oswald text-4xl mix-blend-lighten">{imageData[slide].review1}</p>
              <p className="z-10 cursor-default font-Oswald text-4xl mix-blend-lighten">{imageData[slide].review2}</p>
              <p className="z-10 mt-5 mb-6 cursor-default font-Oswald text-4xl mix-blend-lighten text-orange-600">{imageData[slide].smallReview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/3 mr-10 transform -translate-y-1/2" onClick={moveRight} >
        <NextButton />
      </div>
    </>
  );
}

export default Body;
