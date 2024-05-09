import { useEffect, useState } from "react"
import axios from 'axios';
import { PulseLoader } from "react-spinners"

const User = () => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/login/user");
        console.log(response.data.user)
        setData(response.data.user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        window.location.href = 'http://localhost:5173/login';
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mt-40 flex justify-center text-3xl items-center">
        <h1 className="mr-3 relative -top-1 font-bold #6A76A0">Loading</h1>
        <PulseLoader color="#6A76A0" />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="absolute top-24 w-11/12 p-3">
        <div className="flex justify-center w-full mt-5">
          <img className="rounded-full w-60 h-56 border-2 border-black" src={data.profile || "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} />
        </div>
        <h1 className="text-center text-2xl font-Oswald mt-2"> Profile Photo </h1>
        <div className="mt-5 w-full p-3 border border-black shadow-2xl">
          <div className="flex text-2xl font-Oswald justify-between mt-3">
            <div className="flex">
              <p className="w-24">FirstName</p>
              <h1 className="ml-3">: {data.registration_id.firstName}</h1>
            </div>
            <div className="flex w-5/12">
              <p className="w-24">LastName</p>
              <h1 className="ml-3">: {data.registration_id.lastName}</h1>
            </div>
          </div>
          <div className="flex text-2xl font-Oswald justify-between mt-3">
            <div className="flex">
              <p className="w-24">Age</p>
              <h1 className="ml-3">: {data.registration_id.age}</h1>
            </div>
            <div className="flex w-5/12">
              <p className="w-24">Weight</p>
              <h1 className="ml-3">: {data.registration_id.weight}</h1>
            </div>
          </div>
          <div className="flex text-2xl font-Oswald justify-between mt-3">
            <div className="flex">
              <p className="w-24">Height</p>
              <h1 className="ml-3">: {data.registration_id.height}</h1>
            </div>
            <div className="flex w-5/12">
              <p className="w-24">Lifestyle</p>
              <h1 className="ml-3">: {data.registration_id.lifeStyle}</h1>
            </div>
          </div>
          <div className="flex text-2xl font-Oswald justify-between mt-3">
            <div className="flex">
              <p className="w-24">Email ID</p>
              <h1 className="ml-3">: {data.registration_id.email}</h1>
            </div>
            <div className="flex w-5/12">
              <p className="w-24">Gender</p>
              <h1 className="ml-3">: {data.registration_id.gender}</h1>
            </div>
          </div>
          <div className="flex text-2xl font-Oswald justify-between mt-3">
            <div className="flex">
              <p className="w-24">Bmi</p>
              <h1 className="ml-3">: {data.registration_id.bmi}</h1>
            </div>
            <div className="flex w-5/12">
              <p className="w-24">Calories</p>
              <h1 className="ml-3">: {data.registration_id.calories}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
