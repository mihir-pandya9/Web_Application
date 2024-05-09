import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Signup = () => {
  const [showConfirmPassword, setConfirmShowPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [profile, setProfile] = useState();
  const toast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [signupSucc, setsignupSucc] = useState(false);

  const postDetails = (pics) => {
    if (pics === undefined) {
      toast({
        title: 'Please Select an Image!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: "bottom"
      })
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dhrqxgalx");

      fetch('https://api.cloudinary.com/v1_1/dhrqxgalx/image/upload', {
        method: "post",
        body: data
      })
        .then(data => {
          setProfile(data.url.toString())
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log("Error to setImage : " + err);
        })
    }
    else {
      toast({
        title: 'Please Select an Image!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: "bottom"
      })
      return;
    }
  }

  const SignupHandler = async () => {
    if (!name || !email || !password || !confirmPass) {
      toast({
        title: 'Please Fill all * Fileds',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: "bottom"
      })
      return;
    }

    if (password !== confirmPass) {
      toast({
        title: 'Password is not matched',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: "bottom"
      })
      return;
    }

    try {
      await axios.post('/api/login/signup', { name, email, password, profile });
      setsignupSucc(true);
      // localStorage.setItem("userInfo", JSON.stringify(data));
    }
    catch (err) {
      console.log("Error to store inside the database : ", err)
    }

    if (setsignupSucc) {
      window.location.href = "http://localhost:5173/login";
    }
  }

  return (
    <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
      <div className="bg-white w-5/12 h-max p-5 pl-10 pr-10 shadow-2xl border border-gray-400 mt-24">
        <h1 className="text-center text-4xl font-bold font-mono">Signup</h1>
        <div className="w-full h-fit mt-3">
          <p className="after:content-['*'] ml-2 after:text-red-700">Name</p>
          <input className="p-4 border-2 border-black bg-white/75 w-full rounded-xl" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        </div>
        <div className="w-full h-fit mt-3">
          <p className="after:content-['*'] ml-2 after:text-red-700">Email Address</p>
          <input className="p-4 border-2 border-black bg-white/75 w-full rounded-xl" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" />
        </div>
        <div className="w-full h-fit mt-3 relative">
          <p className="after:content-['*'] ml-2 after:text-red-700">Password</p>
          <div className="relative">
            <input className="p-4 pr-12 border-2 border-black bg-white/75 w-full rounded-xl" onChange={(e) => { setPassword(e.target.value) }} value={password} type={showPassword ? "password" : "text"} placeholder="Enter Password" />
            {showPassword ? <FaRegEyeSlash className="absolute top-6 right-4 text-black cursor-pointer" onClick={() => setShowPassword(false)} /> : <FaEye className="absolute top-6 right-4 text-black cursor-pointer" onClick={() => setShowPassword(true)} />}
          </div>
        </div>
        <div className="w-full h-fit mt-3 relative">
          <p className="after:content-['*'] ml-2 after:text-red-700">Confirm Password</p>
          <div className="relative">
            <input className="p-4 pr-12 border-2 border-black bg-white/75 w-full rounded-xl" value={confirmPass} onChange={(e) => {
              setConfirmPass(e.target.value)
            }} type={showConfirmPassword ? "password" : "text"} placeholder="Confirm Password" />
            {showConfirmPassword ? <FaRegEyeSlash className="absolute top-6 right-4 text-black cursor-pointer" onClick={() => setConfirmShowPassword(false)} /> : <FaEye className="absolute top-6 right-4 text-black cursor-pointer" onClick={() => setConfirmShowPassword(true)} />}
          </div>
        </div>
        <div className="w-full h-fit mt-3 border border-gray-300 p-1 ">
          <p className='ml-2 cursor-pointer'><NavLink to="/login/signup/register" className="flex items-center justify-between"><h1 className="after:content-['*'] after:text-red-700">Registration Form </h1><IoMdClose className="text-red-700 text-2xl mr-2" /></NavLink></p>
        </div>
        <div className="w-full h-fit mt-3 border border-gray-300 p-1">
          <p className='ml-2'>Upload Your Picture</p>
          <input className="ml-2" type="file" accept="image/*" onChange={(e) => postDetails(e.target.files[0])} placeholder="Confirm Password" />
        </div>
        <div className="w-full h-fit mt-3">
          {signupSucc ? (<NavLink to="/login"><button className="bg-black text-white w-full p-4 hover:bg-red-700 hover:text-white hover:border-transparent rounded-xl text-xl" onClick={SignupHandler} >Signup</button></NavLink>) : (<button className="bg-black text-white w-full p-4 hover:bg-red-700 hover:text-white hover:border-transparent rounded-xl text-xl" onClick={SignupHandler} >Signup</button>)}
        </div>
      </div>
    </div>
  )
}

export default Signup;