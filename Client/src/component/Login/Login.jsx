import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useToast } from "@chakra-ui/react";
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loginsucc, setLoginSucc] = useState(false);

  const toast = useToast();

  const loginUser = async () => {

    if (!email || !password) {
      toast({
        title: 'Please fill all the fileds',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: "bottom"
      })
      return;
    }

    try {
      const data = await axios.post("/api/login", { email, password });
      setLoginSucc(true);
      console.log(data.data);
    }
    catch (err) {
      console.log("Error to store inide the database ", err)
    }

    window.location.href = "http://localhost:5173/";

  }

  return (
    <div className=" absolute left-0 top-0 w-full h-full flex justify-center items-center">
      <div className="bg-white w-5/12 p-5 pl-10 pr-10 shadow-2xl border border-gray-400">
        <h1 className="text-center text-4xl font-bold font-mono">Login</h1>
        <div className="w-full h-fit mt-6">
          <p className="after:content-['*'] ml-2 after:text-red-700">Email</p>
          <input className="p-5 border-2 border-black bg-white/75 w-full rounded-xl" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" />
        </div>
        <div className="w-full h-fit mt-4 relative">
          <p className="after:content-['*'] ml-2 after:text-red-700">Password</p>
          <div className="relative">
            <input className="p-4 pr-12 border-2 border-black bg-white/75 w-full rounded-xl" onChange={(e) => { setPassword(e.target.value) }} value={password} type={showPassword ? "password" : "text"} placeholder="Enter Password" />
            {showPassword ? <FaRegEyeSlash className="absolute top-6 right-4 text-black cursor-pointer" onClick={() => setShowPassword(false)} /> : <FaEye className="absolute top-6 right-4 text-black cursor-pointer" onClick={() => setShowPassword(true)} />}
          </div>
        </div>
        <div className="w-full h-fit mt-6">
          {loginsucc ? (<NavLink to="/">
            <button onClick={loginUser} className="bg-black text-white w-full p-4 hover:bg-red-700 hover:text-white hover:border-transparent rounded-xl text-xl">Login</button></NavLink>) : (
            <button onClick={loginUser} className="bg-black text-white w-full p-4 hover:bg-red-700 hover:text-white hover:border-transparent rounded-xl text-xl">Login</button>
          )}
        </div>
        <div className="flex mt-5">
          <p className="mr-2">Don't have an account?</p>
          <p className="font-bold hover:text-red-700 cursor-pointer"> <NavLink to="/login/signup">Signup</NavLink></p>
        </div>
      </div>
    </div>
  )
}

export default Login
