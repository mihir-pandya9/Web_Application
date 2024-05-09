import axios from 'axios';
import { useEffect, useState } from 'react';
import { PulseLoader } from "react-spinners";
import { IoMdSearch } from "react-icons/io";
import PreviousButon from './PreviousButon';
import NextButton from "./NextButton";

const Yoga = () => {
  const [yoga, setYoga] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [beginnerPage, setBeginnerPage] = useState(1);
  const [intermediatePage, setIntermediatePage] = useState(1);
  const [advancedPage, setAdvancedPage] = useState(1);
  const [posesPerPage] = useState(3); // Change this number to display more poses per page

  // Declare variables for poses outside of the useEffect
  const [filteredBeginnerPoses, setFilteredBeginnerPoses] = useState([]);
  const [filteredIntermediatePoses, setFilteredIntermediatePoses] = useState([]);
  const [filteredAdvancedPoses, setFilteredAdvancedPoses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/yoga`);
        setYoga(res.data);
        setLoading(false);
      } catch (err) {
        window.location.href = 'http://localhost:5173/login';
        console.error(`Error fetching yoga data:`, err);
        setLoading(false); // Make sure to set loading to false in case of error
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredBeginnerData = yoga.filter(item =>
      item.Level === "Beginners" && item.AName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBeginnerPoses(filteredBeginnerData);
  }, [search, yoga]);

  useEffect(() => {
    const filteredIntermediateData = yoga.filter(item =>
      item.Level === "Intermediate" && item.AName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredIntermediatePoses(filteredIntermediateData);
  }, [search, yoga]);

  useEffect(() => {
    const filteredAdvancedData = yoga.filter(item =>
      item.Level === "Advanced" && item.AName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredAdvancedPoses(filteredAdvancedData);
  }, [search, yoga]);

  const indexOfLastPose = (currentPage, posesPerPage) => currentPage * posesPerPage;
  const indexOfFirstPose = (currentPage, posesPerPage) => indexOfLastPose(currentPage, posesPerPage) - posesPerPage;

  const paginate = (setCurrentPage, currentPage, direction, poses) => {
    if (direction === 'prev') {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    } else {
      const lastPageIndex = Math.ceil(poses.length / posesPerPage);
      if (currentPage < lastPageIndex) setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="mt-28 flex justify-center w-full border-b-4 pb-5">
        <div className="w-10/12 font-mono text-xl flex justify-between items-center mt-10">
          <h1 className="text-2xl w-7/12">Yoga Plans</h1>
          <div className="flex justify-center items-center w-8/12">
            <input
              className="p-2 rounded-2xl w-full border-2 border-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search Yoga By Name"
            />
            <IoMdSearch className="relative -left-8 text-2xl" />
          </div>
        </div>
      </div>

      {/* Beginners */}
      <div className="mt-12">
        <h1 className="text-2xl font-semibold border-b-4 pb-2">Beginners</h1>
        <div className="flex flex-wrap justify-center">
          {loading ? (
            <div className="mt-10 flex justify-center">
              <PulseLoader color="#6A76A0" />
            </div>
          ) : (
            filteredBeginnerPoses.length > 0 ? (
              filteredBeginnerPoses.slice(indexOfFirstPose(beginnerPage, posesPerPage), indexOfLastPose(beginnerPage, posesPerPage)).map((pose, index) => (
                <div key={index} className="max-w-xs mx-4 my-6 bg-white rounded-lg shadow-md">
                  <img className="w-full h-64 object-cover object-center rounded-t-lg" src={pose.Photo} alt={pose.AName} />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-bold">{pose.AName}</h1>
                    <p className="mt-2 text-gray-600">{pose.Description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="mt-4 text-center w-full">No poses found for beginners</div>
            )
          )}
        </div>
        <div className="flex justify-center mt-5">
          <PreviousButon className="mr-3" onClick={() => paginate(setBeginnerPage, beginnerPage, 'prev', filteredBeginnerPoses)} disabled={beginnerPage === 1} />
          <NextButton onClick={() => paginate(setBeginnerPage, beginnerPage, 'next', filteredBeginnerPoses)} disabled={filteredBeginnerPoses.length < posesPerPage} />
        </div>
      </div>

      {/* Intermediate */}
      <div className="mt-12">
        <h1 className="text-2xl font-semibold border-b-4 pb-2">Intermediate</h1>
        <div className="flex flex-wrap justify-center">
          {loading ? (
            <div className="mt-10 flex justify-center">
              <PulseLoader color="#6A76A0" />
            </div>
          ) : (
            filteredIntermediatePoses.length > 0 ? (
              filteredIntermediatePoses.slice(indexOfFirstPose(intermediatePage, posesPerPage), indexOfLastPose(intermediatePage, posesPerPage)).map((pose, index) => (
                <div key={index} className="max-w-xs mx-4 my-6 bg-white rounded-lg shadow-md">
                  <img className="w-full h-64 object-cover object-center rounded-t-lg" src={pose.Photo} alt={pose.AName} />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-bold">{pose.AName}</h1>
                    <p className="mt-2 text-gray-600">{pose.Description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="mt-4 text-center w-full">No poses found for intermediate</div>
            )
          )}
        </div>
        <div className="flex justify-center mt-5">
          <PreviousButon className="mr-3" onClick={() => paginate(setIntermediatePage, intermediatePage, 'prev', filteredIntermediatePoses)} disabled={intermediatePage === 1} />
          <NextButton onClick={() => paginate(setIntermediatePage, intermediatePage, 'next', filteredIntermediatePoses)} disabled={filteredIntermediatePoses.length < posesPerPage} />
        </div>
      </div>

      {/* Advanced */}
      <div className="mt-12">
        <h1 className="text-2xl font-semibold border-b-4 pb-2">Advanced</h1>
        <div className="flex flex-wrap justify-center">
          {loading ? (
            <div className="mt-10 flex justify-center">
              <PulseLoader color="#6A76A0" />
            </div>
          ) : (
            filteredAdvancedPoses.length > 0 ? (
              filteredAdvancedPoses.slice(indexOfFirstPose(advancedPage, posesPerPage), indexOfLastPose(advancedPage, posesPerPage)).map((pose, index) => (
                <div key={index} className="max-w-xs mx-4 my-6 bg-white rounded-lg shadow-md">
                  <img className="w-full h-64 object-cover object-center rounded-t-lg" src={pose.Photo} alt={pose.AName} />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-bold">{pose.AName}</h1>
                    <p className="mt-2 text-gray-600">{pose.Description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="mt-4 text-center w-full">No poses found for advanced</div>
            )
          )}
        </div>
        <div className="flex justify-center mt-5">
          <PreviousButon className="mr-3" onClick={() => paginate(setAdvancedPage, advancedPage, 'prev', filteredAdvancedPoses)} disabled={advancedPage === 1} />
          <NextButton onClick={() => paginate(setAdvancedPage, advancedPage, 'next', filteredAdvancedPoses)} disabled={filteredAdvancedPoses.length < posesPerPage} />
        </div>
      </div>
    </>
  );
};

export default Yoga;
