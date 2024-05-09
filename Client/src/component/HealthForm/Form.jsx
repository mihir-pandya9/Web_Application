import { useEffect, useRef, useState } from "react";
import { addInfo } from "../../feature/FormSilce";
import { useToast } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import axios from "axios";


const Form = () => {

  const FirstNameText = useRef();
  const LastNameText = useRef();
  const [lifeStyle, setLifeStyle] = useState();
  const [Age, setAge] = useState();
  const [Weight, setWeight] = useState();
  const [Height, setHeight] = useState();
  const [gender, setgender] = useState("");
  const [BMI, setBMI] = useState("");
  const [calorie, setCalorie] = useState("");
  const [email, setEmail] = useState("");

  const toast = useToast();

  const BmiTesting = () => {
    if (Height && Weight) {
      const MeterHeight = (parseFloat(Height) / 100) * (parseFloat(Height) / 100);
      const Total = (parseFloat(Weight) / MeterHeight);
      if (!isNaN(Total)) {
        setBMI(String(Total.toFixed(3)));
      } else {
        setBMI("Invalid input");
      }
    } else {
      setBMI("");
    }
  }

  const CalorieTesting = () => {
    if (gender === "Male") {
      const Total = ((10 * Number(Weight)) + (6.5 * Number(Height)) - (5 * Number(Age)) + 5);
      setCalorie(Total);
    }
    else {
      const Total = ((10 * Number(Weight)) + (6.5 * Number(Height)) - (5 * Number(Age)) - 161);
      setCalorie(Total);
    }
  }

  useEffect(() => {
    if (Weight !== "" && Height !== "") {
      BmiTesting();
    }
    else {
      setBMI("");
    }
  }, [Weight, Height])

  useEffect(() => {
    if (Weight !== "" && Height !== "" && Age !== "" && gender !== "") {
      CalorieTesting();
    }
    else {
      setCalorie("");
    }
  }, [Weight, Height, Age, gender])

  console.log(addInfo[0]);

  const submitForm = async () => {
    if (!FirstNameText.current.value ||
      !LastNameText.current.value ||
      !lifeStyle ||
      !Age ||
      !Height ||
      !Weight ||
      !gender ||
      !BMI ||
      !calorie ||
      !email) {
      toast({
        title: 'Please Fill all the Fileds',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: "bottom"
      })
      return;
    }

    try {
      const response = await axios.post('/api/login/signup/register', {
        firstName: FirstNameText.current.value,
        lastName: LastNameText.current.value,
        lifeStyle: lifeStyle,
        age: Age,
        height: Height,
        weight: Weight,
        gender: gender,
        email: email,
        bmi: BMI,
        calories: calorie
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  console.log(lifeStyle);

  return (
    <div className='flex justify-center absolute left-0 right-0 top-0 bottom-0 bg-black/80 overlay bg-white/300 w-full h-full items-center'>
      <div className='pt-5 text-white p-6 bg-zinc-800/100 min-w-3/5 max-w-3/6 h-fit border-2 border-black rounded-xl  justify-around'>
        <div className='h-fit pb-2 block flex-wrap justify-between'>
          <h2 className='inline mr-10'>
            First Name : <input ref={FirstNameText} className='ml-3 p-1 rounded-xl w-72 text-black' type='text' placeholder='Enter your name' />
          </h2>
          <h2 className='inline'>
            Last Name : <input ref={LastNameText} className='ml-3 p-1 rounded-xl w-72 text-black' type='text' placeholder='Enter your name' />
          </h2>
        </div>
        <div className="flex justify-between  h-fit mt-5 rounded-2xl w-full">
          <div className='p-3 mt-4 flex justify-between flex-wrap items-center border border-white w-96 rounded-xl'>
            <h2 className='flex w-96 h-full'>
              Your Life Style :
              <form className=''>
                <div>
                  <input onChange={(e) => { setLifeStyle(e.target.value) }} className="ml-3 text-white" value="Sedentary" type='radio' name="lifestyle" />
                  <label className='ml-2 '>Sedentary : little or no exercise</label>
                </div>
                <div>
                  <input onChange={(e) => { setLifeStyle(e.target.value) }} className="ml-3 text-white" value="Light" name="lifestyle" type='radio' />
                  <label className='ml-2 '>Light : Exercise 1-3 times/week</label>
                </div>
                <div>
                  <input onChange={(e) => { setLifeStyle(e.target.value) }} className="ml-3 text-white" value="Moderate" name="lifestyle" type='radio' />
                  <label className='ml-2 '>Moderate : 4-5 times week</label>
                </div>
                <div>
                  <input onChange={(e) => { setLifeStyle(e.target.value) }} className="ml-3 text-white" value="Active" name="lifestyle" type='radio' />
                  <label className='ml-2 '>Active : daily exercise</label>
                </div>
                <div>
                  <input onChange={(e) => { setLifeStyle(e.target.value) }} className="ml-3 text-white" value="Extra Active" name="lifestyle" type='radio' />
                  <label className='ml-2 '>Extra Active : intense exercise </label>
                </div>
              </form>
            </h2>
          </div>
          <div className="w-fit mt-4">
            <div>
              <h2 className='inline ml-5'>
                Age : <input onChange={(e) => setAge(e.target.value)} value={Age} className='ml-4 p-1 rounded-xl w-72 text-black' type='text' placeholder='Enter your Age' />
              </h2>
            </div>
            <div className=" mt-5">
              <h2 className='inline'>
                Weight : <input onChange={(e) => setWeight(e.target.value)} value={Weight} className='ml-4 p-1 rounded-xl w-72 text-black' type='text' placeholder='Enter your Weight' />
              </h2>
            </div>
            <div className=" mt-5">
              <h2 className='inline ml-1'>
                Height : <input onChange={(e) => setHeight(e.target.value)} value={Height} className='ml-4 p-1 rounded-xl w-72 text-black' type='text' placeholder='Enter your Height in cm' />
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between mt-5">
            <h2>
              Gender :
              <input onChange={(e) => { setgender(e.target.value) }} className="ml-3" type="radio" value="Male" name="gender" />
              <label className="ml-2">Male</label>
              <input onChange={(e) => setgender(e.target.value)} className="ml-3" type="radio" value="Female" name="gender" />
              <label className="ml-2">FeMale</label>
            </h2>
            <div className="">
              <h2 className='inline ml-1'>
                Email : <input className='ml-4 p-1 rounded-xl w-72 text-black' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter Email' />
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="mt-5 w-fit">
            <h2 className='inline ml-5'>
              BMI :
              <input className="ml-4 p-1 cursor-default rounded-xl w-72 text-black" type="text" placeholder="Fill Height and Weight" readOnly value={BMI} />
            </h2>
          </div>
          <div className="mt-5 w-fit">
            <h2 className='inline ml-5'>
              Calories :
              <input className="ml-4 p-1 cursor-default rounded-xl w-72 text-black" type="text" placeholder="Fill Height, Weight, Age and Gender" value={calorie} readOnly />
            </h2>
          </div>
        </div>
        <div className="mt-6" >
          <NavLink to="/login/signup">
            <button onClick={() => { submitForm() }} type="submit" className="cursor-pointer hover:bg-red-900 hover:text-white w-full p-3 rounded-2xl bg-gray-400 text-black">Submit</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Form 