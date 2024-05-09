import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import axios from 'axios'

const Alternative = () => {

  const [search, setSearchName] = useState("");
  const [value, setValue] = useState([]);
  const [filteredValue, setFilteredValue] = useState([]);

  const location = useLocation();
  const Name = location.search.split("=")[1];

  useEffect(() => {
    async function getValue() {
      try {
        const res = await axios.get(`/api/diet/food${location.search}`);
        console.log(location)
        setValue(res.data);
      } catch (err) {
        console.log(`Error fetching ${Name} food alternatives: ${err}`);
      }
    }
    getValue();
  }, [location.search, Name]);

  useEffect(() => {
    const filteredData = value.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredValue(filteredData);
  }, [search, value]);

  return (
    <>
      <div className="mt-28 flex justify-center w-full h-fit">
        <div className='w-10/12 font-mono text-xl flex justify-between items-center mt-10 h-fit'>
          <h1 className="text-2xl w-7/12">
            Alternative of {Name}
          </h1>
          <div className="flex justify-center items-center w-8/12">
            <input className="h-fit p-2 rounded-2xl w-full border-2 border-black" value={search} onChange={(e) => setSearchName(e.target.value)} type="text" placeholder="Search Food Name" />
            <IoMdSearch className="relative -left-8 text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex mt-3 justify-center h-fit p-3">
        <div className='w-10/12 font-mono flex flex-wrap items-center justify-around'>
          {filteredValue.length > 0 ? (filteredValue.map((item, index) => (
            <div key={index} className={`transition-transform duration-300 mr-15 mt-8 ${item.name.length > 21 ? 'scale-x-95 scale-y-95 hover:scale-x-100 hover:scale-y-100' : 'scale-x-95 scale-y-100 hover:scale-x-100 hover:scale-y-105'} hover:shadow-2xl border border-gray-400 bg-zinc-800 text-white rounded-lg p-2 h-fit`}>
              <div>
                <img className="w-80 h-80 rounded-lg" src={item.img} alt={item.name} />
              </div>
              <div className="flex text-xl font-medium w-80">
                <div className="w-20 flex justify-between">
                  <h1>Name</h1>
                  <h1>:</h1>
                </div>
                <h1 className="ml-2 flex flex-wrap">{item.name}</h1>
              </div>
              <div className="flex text-xl">
                <div className="w-20 flex justify-between">
                  <h1>Amount</h1>
                  <h1>:</h1>
                </div>
                <h1 className="ml-2">{item.amount}</h1>
              </div>
              <div className="flex text-xl">
                <div className="w-20 flex justify-between">
                  <h1>Kcal</h1>
                  <h1>:</h1>
                </div>
                <h1 className="ml-2">{item.kcal}</h1>
              </div>
              {/* <div className="text-xl mt-2">
                <button className="bg-white cursor-pointer text-black hover:bg-red-700 hover:text-white p-2 w-full rounded-lg"> Swap The Food</button>
              </div> */}
            </div>
          ))) : (<div className="mt-20 text-2xl">
            <h1>Sorry! can not find the food by Name</h1>
          </div>)}
        </div>
      </div >
    </>
  )
}

export default Alternative;
