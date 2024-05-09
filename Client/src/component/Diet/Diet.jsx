import { TbTargetArrow } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import vegSymbole from './veg-symbole.png'
import { NavLink, useLocation } from 'react-router-dom';
import Alternative from "./Alternative";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners"
import axios from "axios";

const Diet = () => {

  const location = useLocation();
  const search = new URLSearchParams(location).get('search');
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pending, setPending] = useState("Pending");

  const renderAlternativeComponent = (searchParam) => {
    switch (searchParam) {
      case 'morning':
      case 'before-breakfast-juices':
      case 'before-breakfast-nuts':
      case 'breakfast':
      case 'lunch-veggie':
      case 'lunch-salads':
      case 'evening-snack':
      case 'lunch-roti':
      case 'dinner':
        return <Alternative />;
      default:
        return null;
    }
  };

  useEffect(() => {
    async function getValue() {
      try {
        const res = await axios.get(`/api/diet/food`);
        setValue(res.data);
        setLoading(false);
      } catch (err) {
        console.log(`Error to fetch the food-alternatives: ${err}`);
        window.location.href = 'http://localhost:5173/login';
      }
    }
    getValue();
  }, [setValue]);

  console.log("Diet data: ", value);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/login/user");
        console.log(response.data.user)
        setData(response.data.user.registration_id);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        window.location.href = 'http://localhost:5173/login';
      }
    };
    fetchData();
  }, [setData]);

  const completedPending = (kcal) => {
    setPending("Completed");
  };

  if (loading) {
    return (
      <div className="mt-40 flex justify-center text-3xl items-center">
        <h1 className="mr-3 relative -top-1 font-bold #6A76A0">Loading</h1>
        <PulseLoader color="#6A76A0" />
      </div>
    );
  }

  if (!value || value.length === 0) {
    return <div>No data available</div>;
  }

  const BeforeBreakFast = value[1][0];
  const BreakFast = value[3][0];
  const DietMorning = value[0][0];
  const DietNuts = value[2][0];
  const Dinner = value[8][0];
  const Evening_Snak = value[7][0];
  const Lunch_Base = value[6][0];
  const Lunch_Salad = value[4][0];
  const Lunch_Veggie = value[5][0];


  return (
    <>
      <div className='flex mt-28 justify-center h-fit'>
        <div className=' w-10/12 flex justify-center font-mono text-lg'>
          <div className='bg-white w-6/12 h-fit border-2 border-gray-300 p-3 rounded-xl mt-5 shadow-2xl'>
            <div className='flex justify-between'>
              <h2> Daily Intak</h2>
              <h2 className="flex items-center"> Target <TbTargetArrow className="ml-1" /></h2>
            </div>
            <div className='flex justify-between mt-5'>
              <h2>Calories</h2>
              <h2>Total kcal {data.calories}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-2 justify-center h-fit">
        <div className='w-10/12 font-mono text-3xl font-semibold flex justify-center mt-8'>
          <h1 className="ml-3 ">Diet for Today</h1>
        </div>
      </div>
      <div className="flex  mt-2 justify-center h-fit p-2">
        <div className='w-10/12 font-mono shadow-2xl'>
          <div className="bg-green-200 flex justify-between items-center p-3 pl-5 pr-5 rounded-t-lg">
            <h1 className="flex text-xl w-96 justify-between">When You Wake up <p className="text-base ml-16 flex justify-center items-center"> <IoTimeOutline className="mr-2" /> 06:30 am </p></h1>
            <button onClick={() => { completedPending(DietMorning.kcal) }} className="transition-all duration-300 border-2 border-green-700 rounded-xl p-2 hover:bg-green-700 hover:text-white text-green-700">{pending}</button>
          </div>
          <div className="p-3 bg-white flex pl-5">
            <img className="w-56 h-48 rounded-xl" src={DietMorning.img || ""} />
            <div className="ml-10 text-xl">
              <img className="w-14 h-14 absolute right-40" src={vegSymbole} />
              <h1 className=" mt-5">{DietMorning.name || ""}</h1>
              <h1 className="mt-5 "> Amount {DietMorning.amount} - {DietMorning.ml || ""} ml / {DietMorning.kcal || 0} Kcal </h1>
              <button className="transition-all duration-300 flex justify-center items-center bg-black text-white hover:bg-red-600 mt-8  p-2 rounded-xl"><NavLink to=
                '/diet/food?search=morning'
              >See Alternative </NavLink><IoIosArrowForward /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  mt-2 justify-center h-fit p-2">
        <div className='w-10/12 font-mono shadow-2xl'>
          <div className="bg-orange-200 flex justify-between items-center p-3 pl-5 pr-5 rounded-t-lg">
            <h1 className="flex text-xl w-96 justify-between">Before Breakfast <p className="text-base ml-16 flex justify-center items-center"> <IoTimeOutline className="mr-2" /> 07:30 am </p></h1>
            <button onClick={() => { completedPending(DietMorning.kcal) }} className="transition-all duration-300 border-2 border-orange-700 rounded-xl p-2 hover:bg-orange-700 hover:text-white text-orange-700">{pending}</button>
          </div>
          <div className="p-3 bg-white flex pl-5 border-b border-gray-300">
            <img className="w-56 h-48 rounded-xl" src={BeforeBreakFast.img || ""} />
            <div className="ml-10 text-xl">
              <img className="w-14 h-14 absolute right-40" src={vegSymbole} />
              <h1 className=" mt-5">{BeforeBreakFast.name}</h1>
              <h1 className="mt-5 "> Amount {BeforeBreakFast.amount} - {BeforeBreakFast.ml} ml / {BeforeBreakFast.kcal || 0} Kcal </h1>
              <button className="transition-all duration-300 flex justify-center items-center bg-black text-white hover:bg-red-600 mt-8  p-2 rounded-xl"><NavLink to="/diet/food?search=before-breakfast-juices">See Alternative</NavLink>
                <IoIosArrowForward /></button>
            </div>
          </div>
          <div className="p-3 bg-white flex pl-5">
            <img className="w-56 h-48 rounded-xl" src={DietNuts.img} />
            <div className="ml-10 text-xl">
              <img className="w-14 h-14 absolute right-40" src={vegSymbole} />
              <h1 className=" mt-5">{DietNuts.name}</h1>
              <h1 className="mt-5 "> Amount {DietNuts.amount} / {DietNuts.kcal} Kcal </h1>
              <button className="transition-all duration-300 flex justify-center items-center bg-black text-white hover:bg-red-600 mt-8  p-2 rounded-xl"><NavLink to="/diet/food?search=before-breakfast-nuts">See Alternative</NavLink> <IoIosArrowForward /></button>
            </div>
          </div>
        </div>
      </div>
      {/**/}
      <div className="flex mt-2 justify-center h-fit p-2">
        <div className='w-10/12 font-mono shadow-2xl'>
          <div className="bg-pink-200 flex justify-between items-center p-3 pl-5 pr-5 rounded-t-lg">
            <h1 className="flex text-xl w-96 justify-between">Breakfast<p className="text-base ml-16 flex justify-center items-center"> <IoTimeOutline className="mr-2" /> 10:00 am </p></h1>
            <button onClick={() => { completedPending(DietMorning.kcal) }} className="transition-all duration-300 border-2 border-pink-700 rounded-xl p-2 hover:bg-pink-700 hover:text-white text-pink-700">{pending}</button>
          </div>
          <div className="p-3 bg-white flex pl-5 border-b border-gray-300">
            <img className="w-56 h-48 rounded-xl" src={BreakFast.img} />
            <div className="ml-10 text-xl">
              <img className="w-14 h-14 absolute right-40" src={vegSymbole} />
              <h1 className=" mt-5">{BreakFast.name}</h1>
              <h1 className="mt-5 "> Amount {BreakFast.amount} / {BreakFast.kcal} Kcal </h1>
              <button className="transition-all duration-300 flex justify-center items-center bg-black text-white hover:bg-red-600 mt-8  p-2 rounded-xl"><NavLink to="/diet/food?search=breakfast">See Alternative </NavLink><IoIosArrowForward /></button>
            </div>
          </div>
        </div>
      </div>
      {/**/}
      <div className="flex mt-2 justify-center h-fit p-2">
        <div className='w-10/12 font-mono shadow-2xl'>
          <div className="bg-blue-200 flex justify-between items-center p-3 pl-5 pr-5 rounded-t-lg">
            <h1 className="flex text-xl w-96 justify-between">Lunch <p className="text-base ml-16 flex justify-center items-center"> <IoTimeOutline className="mr-2" /> 12:30 pm </p></h1>
            <button onClick={() => { completedPending(DietMorning.kcal) }} className="transition-all duration-300 border-2 border-blue-800 rounded-xl p-2 hover:bg-blue-800 hover:text-white text-blue-800">{pending}</button>
          </div>
          <div className="p-3 bg-white flex pl-5 border-b border-gray-300">
            <img className="w-56 h-48 rounded-xl" src={Lunch_Salad.img} />
            <div className="ml-10 text-xl">
              <img className="w-14 h-14 absolute right-40" src={vegSymbole} />
              <h1 className=" mt-5">{Lunch_Salad.name}</h1>
              <h1 className="mt-5 "> Amount {Lunch_Salad.amount} / {Lunch_Salad.kcal} Kcal </h1>
              <button className="transition-all duration-300 flex justify-center items-center bg-black text-white hover:bg-red-600 mt-8  p-2 rounded-xl"><NavLink to="/diet/food?search=lunch-salads">See Alternative</NavLink> <IoIosArrowForward /></button>
            </div>
          </div>
          <div className="p-3 bg-white flex pl-5 border-b border-gray-300">
            <img className="w-56 h-48 rounded-xl" src={Lunch_Veggie.img} />
            <div className="ml-10 text-xl">
              <img className="w-14 h-14 absolute right-40" src={vegSymbole} />
              <h1 className=" mt-5">{Lunch_Veggie.name}</h1>
              <h1 className="mt-5 "> Amount {Lunch_Veggie.amount} / {Lunch_Veggie.kcal} Kcal </h1>
              <button className="transition-all duration-300 flex justify-center items-center bg-black text-white hover:bg-red-600 mt-8  p-2 rounded-xl"><NavLink to="/diet/food?search=lunch-veggie">See Alternative</NavLink> <IoIosArrowForward /></button>
            </div>
          </div>
          <div className="p-3 bg-white flex pl-5">
            <img className="w-56 h-48 rounded-xl" src={Lunch_Base.img} />
            <div className="ml-10 text-xl">
              <img className="w-14 h-14 absolute right-40" src={vegSymbole} />
              <h1 className=" mt-5">{Lunch_Base.name}</h1>
              <h1 className="mt-5 "> Amount {Lunch_Base.amount} / {Lunch_Base.kcal} Kcal </h1>
              <button className="transition-all duration-300 flex justify-center items-center bg-black text-white hover:bg-red-600 mt-8  p-2 rounded-xl"><NavLink to="/diet/food?search=lunch-roti">See Alternative</NavLink> <IoIosArrowForward /></button>
            </div>
          </div>
        </div>
      </div>
      {/**/}
      <div className="flex  mt-2 justify-center h-fit p-2">
        <div className='w-10/12 font-mono shadow-2xl'>
          <div className="bg-lime-200 flex justify-between items-center p-3 pl-5 pr-5 rounded-t-lg">
            <h1 className="flex text-xl w-96 justify-between">Evening Snack <p className="text-base ml-16 flex justify-center items-center"> <IoTimeOutline className="mr-2" /> 05:00 pm </p></h1>
            <button onClick={() => { completedPending(DietMorning.kcal) }} className="transition-all duration-300 border-2 border-lime-700 rounded-xl p-2 hover:bg-lime-700 hover:text-white text-lime-700">{pending}</button>
          </div>
          <div className="p-3 bg-white flex pl-5">
            <img className="w-56 h-48 rounded-xl" src={Evening_Snak.img} />
            <div className="ml-10 text-xl">
              <img className="w-14 h-14 absolute right-40" src={vegSymbole} />
              <h1 className=" mt-5">{Evening_Snak.name}</h1>
              <h1 className="mt-5 "> Amount {Evening_Snak.amount} / {Evening_Snak.kcal || 0} Kcal </h1>
              <button className="transition-all duration-300 flex justify-center items-center bg-black text-white hover:bg-red-600 mt-8  p-2 rounded-xl"><NavLink to="/diet/food?search=evening-snack">See Alternative </NavLink><IoIosArrowForward /></button>
            </div>
          </div>
        </div>
      </div>
      {/**/}
      <div className="flex mt-2 justify-center h-fit p-2">
        <div className='w-10/12 font-mono shadow-2xl'>
          <div className="bg-yellow-200 flex justify-between items-center p-3 pl-5 pr-5 rounded-t-lg">
            <h1 className="flex text-xl w-96 justify-between">Dinner <p className="text-base ml-16 flex justify-center items-center"> <IoTimeOutline className="mr-2" /> 07:30 pm </p></h1>
            <button onClick={() => { completedPending(DietMorning.kcal) }} className="transition-all duration-300 border-2 border-yellow-800 rounded-xl p-2 hover:bg-yellow-800 hover:text-white text-yellow-800">{pending}</button>
          </div>
          <div className="p-3 bg-white flex pl-5">
            <img className="w-56 h-48 rounded-xl" src={Dinner.img} />
            <div className="ml-10 text-xl">
              <img className="w-14 h-14 absolute right-40" src={vegSymbole} />
              <h1 className=" mt-5">{Dinner.name}</h1>
              <h1 className="mt-5 "> Amount {Dinner.amount} / {Dinner.kcal} Kcal </h1>
              <button className="transition-all duration-300 flex justify-center items-center bg-black text-white hover:bg-red-600 mt-8  p-2 rounded-xl"><NavLink to="/diet/food?search=dinner">See Alternative</NavLink> <IoIosArrowForward /></button>
            </div>
          </div>
        </div>
      </div>
      {renderAlternativeComponent(search)}
    </>
  )
}
export default Diet




// function randomValue(valueName) {
//   let storedData = value[valueName];
//   if (storedData && storedData.length > 0) {
//     const randomIndex = Math.floor(Math.random() * storedData.length);
//     const randomItem = storedData[randomIndex];
//     const values = {
//       img: randomItem.img || "",
//       amount: randomItem.amount || "",
//       name: randomItem.name || "",
//       kcal: randomItem.kcal || "",
//     };
//     if (randomItem.ml) {
//       values.ml = randomItem.ml || "";
//     }
//     return values;
//   } else {
//     console.log(`No data found for ${valueName}`);
//   }
// }


// const BeforeBreakFast = randomValue(1);
// const BreakFast = randomValue(3);
// const DietMorning = randomValue(0);
// const DietNuts = randomValue(2);
// const Dinner = randomValue(8);
// const Evening_Snak = randomValue(7);
// const Lunch_Base = randomValue(6);
// const Lunch_Salad = randomValue(4);
// const Lunch_Veggie = randomValue(5);

