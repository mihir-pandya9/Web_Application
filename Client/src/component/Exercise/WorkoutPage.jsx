import { IoMdSearch } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { PulseLoader } from "react-spinners"
import "./workoutPage.css"
import { useEffect, useState } from "react";
import axios from 'axios';

const WorkoutPage = () => {

  const location = useLocation();
  const query = location.search.split("=")[1];

  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredValue, setFilteredValue] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/workout?muscles=${query}`)
        setValue(res.data);
        setLoading(false);
      }
      catch (err) {
        console.log(`Error to get the data of the ${query}`, err);
        window.location.href = 'http://localhost:5173/login';
      }
    })();

  }, [])


  useEffect(() => {
    const filteredValue = value.filter(item => item.WorkOut.toLowerCase().includes(search.toLowerCase()));
    setFilteredValue(filteredValue);
  }, [value, search]);


  if (loading) {
    return (
      <div className="mt-40 flex justify-center text-3xl items-center">
        <h1 className="mr-3 relative -top-1 font-bold #6A76A0">Loading</h1>
        <PulseLoader color="#6A76A0" />
      </div>
    );
  }


  return (
    <>
      <div className="mt-28 flex justify-center w-full h-fit">
        <div className='w-10/12 font-mono text-xl flex justify-between items-center mt-10 h-fit'>
          <h1 className="text-2xl w-7/12">
            Exercise of {query.charAt(0).toUpperCase() + query.slice(1)}
          </h1>
          <div className="flex justify-center items-center w-full">
            <input className="h-fit p-2 rounded-2xl w-full border-2 border-black" onChange={e => setSearch(e.target.value)} type="text" placeholder="Search By Workout Name" />
            <IoMdSearch className="relative -left-8 text-2xl" />
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center font-mono">
        <div className="w-11/12 flex flex-wrap justify-around">
          {filteredValue.length > 0 ? filteredValue.map((workout) => (
            <div key={workout.WorkOut} className="transition-all duration-300 border-2 scale-x-95 scale-y-95 hover:scale-x-100 hover:scale-y-100 hover:shadow-2xl border-zink-800 bg-zinc-800 text-white border-zinc-400 mb-10 p-3 w-96 rounded-xl ">
              <div className="relative text-white">
                <img className="w-96 h-80 rounded-xl object-cover cursor-pointer" src={workout.img} alt={workout.WorkOut} />
                <a href={workout.Video} target="_blank"><div className="absolute inset-0 bg-black rounded-xl opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center"  >
                    <h1 className="text-lg font-bold mb-2">{workout.WorkOut}</h1>
                    <p className="text-sm w-80">{workout["Long Explanation"]}</p>
                  </div>
                </div></a>
              </div>
              <div className="flex mt-2">
                <div className="w-32 flex justify-between">
                  <h1 className="font-bold">Workout Name</h1>
                  <h1>:</h1>
                </div>
                <h1 className="ml-2 font-bold"> {workout.WorkOut}</h1>
              </div>
              <div className="flex mt-1">
                <div className="w-32 flex justify-between">
                  <h1 className="font-bold">Equipment</h1>
                  <h1>:</h1>
                </div>
                <h1 className="ml-2 font-bold"> {workout.Equipment === null ? workout.Equipment = "None" : workout.Equipment}</h1>
              </div>
              <div className="flex mt-1">
                <div className="w-32 flex justify-between">
                  <h1 className="font-bold">Intensity Level</h1>
                  <h1>:</h1>
                </div>
                <h1 className="ml-2 font-bold"> {workout.Intensity_Level}</h1>
              </div>
              <div className="flex mt-1">
                <div className="w-32 flex justify-between">
                  <h1 className="font-bold">Beginner Sets</h1>
                  <h1>:</h1>
                </div>
                <h1 className="ml-2 font-bold"> {workout["Beginner Sets"]}</h1>
              </div>
              <div className="flex mt-1">
                <div className="w-32 flex justify-between">
                  <h1 className="font-bold ">Expert Sets</h1>
                  <h1>:</h1>
                </div>
                <h1 className="ml-2 font-bold"> {workout["Expert Sets"]}</h1>
              </div>
              <div className="flex mt-1">
                <div className="flex justify-between  p-1 rounded">
                  <h1 className="w-28 font-bold -ml-1">Explanation</h1>
                  <h1 className="ml-2">:</h1>
                </div>
                <h1 className="ml-2 flex-grow font-bold"> {workout["Explaination"]}</h1>
              </div>
            </div>
          )) : (<div className="mt-20 text-2xl">
            <h1>Sorry! can not find that Workout</h1>
          </div>)}
        </div >
      </div>
    </>
  )
}

export default WorkoutPage
