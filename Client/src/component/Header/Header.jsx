import { FaRegUser } from "react-icons/fa";
import logo from './logo/logo.jpg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="z-20 fixed top-0 bg-white shadow-2xl w-full">
      <div className="flex justify-center">
        <div className="flex justify-between items-center w-5/6">
          <img className="ml-3 w-fit h-24" src={logo} alt="Logo" />
          <ul className="ml-5 font-mono font-medium flex justify-around items-center w-7/12 flex-wrap">
            <li>
              <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-700" : "text-black"} p-1 text-xl cursor-pointer relative inline-block group`}>
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/workout" className={({ isActive }) => `${isActive ? "text-red-700" : "text-black"} p-1 text-xl cursor-pointer relative inline-block group`}>
                Workout
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/yoga" className={({ isActive }) => `${isActive ? "text-red-700" : "text-black"} p-1 text-xl cursor-pointer relative inline-block group`} >
                Yoga
                <span span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/community-room" className={({ isActive }) => `${isActive ? "text-red-700" : "text-black"} p-1 text-lg cursor-pointer relative inline-block group`}>
                Community Room
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/diet" className={({ isActive }) => `p-1 text-xl ${isActive ? "text-red-700" : "text-black"} cursor-pointer relative inline-block group`}>
                Diet
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              </NavLink>
            </li>
          </ul>
          <ul className="font-mono font-medium flex justify-around items-center w-fit h-fit">
            <li> <NavLink to="/login" className={({ isActive }) => `flex p-2 text-xl ${isActive ? "bg-black && text-white && border-black" : "text-black && border-black"} pl-3 pr-3 border-2 cursor-pointer rounded-xl items-center hover:bg-black hover:text-white `}>Log in
            </NavLink></li>
            <li> <NavLink to="/user" className={({ isActive }) => `ml-5 flex p-2 text-xl ${isActive ? "bg-black && border-black && text-white" : "text-black && border-black"} hover:bg-black hover:text-white cursor-pointer border-2 rounded-xl items-center `}>User<FaRegUser className="ml-2 font-medium" /></NavLink></li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default Header;


