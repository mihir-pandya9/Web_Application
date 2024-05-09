import { BiCaretRight } from "react-icons/bi";
import biceps from "./gifs/biceps.gif";
import triceps from "./gifs/triceps.gif";
import chest from "./gifs/chest.gif";
import legs from "./gifs/legs.gif";
import shoulders from "./gifs/sholder.gif";
import abs from "./gifs/abs.gif";
import back from "./gifs/back.gif";
import calves from "./gifs/calves.gif";
import stretching from "./gifs/streching.gif";
import warmUp from "./gifs/wormUp.gif";
import { NavLink, useLocation } from "react-router-dom";
import WorkoutPage from "./WorkoutPage.jsx";
import { PulseLoader } from "react-spinners"
import { useEffect, useState } from "react";
import axios from 'axios';

const Workout = () => {

  const location = useLocation();
  const search = new URLSearchParams(location.search).get('muscles');
  const [loading, setLoading] = useState(true);
  const [storedData, setData] = useState(null); // Initialize data as null
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/login/user");
        const value = await response.data.user.registration_id;
        setData(value);
      } catch (error) {
        console.error("Error fetching user:", error);
        window.location.href = 'http://localhost:5173/login';
        setError("An error occurred while fetching user data.");
        setLoading(false);
      }
    };

    fetchData();
    console.log("Value: ", storedData);
  }, [setData]);


  useEffect(() => {
    if (storedData && storedData.bmi !== undefined) {
      const bmi = storedData.bmi;

      if (bmi <= 18.5) {
        setStatus("underweight");
        setLoading(false);
      } else if (bmi <= 25) {
        setStatus("normalWeight");
        setLoading(false);
      } else if (bmi <= 30) {
        setStatus("overweight");
        setLoading(false);
      } else {
        setStatus("obese");
        setLoading(false);
      }
    }
  }, [storedData]);



  if (loading) {
    return (
      <div className="mt-40 flex justify-center text-3xl items-center">
        <h1 className="mr-3 relative -top-1 font-bold #6A76A0">Loading</h1>
        <PulseLoader color="#6A76A0" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-40 flex justify-center text-3xl items-center">
        <h1 className="mr-3 relative -top-1 font-bold text-red-600">{error}</h1>
      </div>
    );
  }

  const renderAlternativeComponent = (searchParam) => {
    switch (searchParam) {
      case 'biceps':
      case 'triceps':
      case 'chest':
      case 'back':
      case 'legs':
      case 'abs':
      case 'stretching':
      case 'warmup':
      case 'calves':
      case 'shoulders':
        return <WorkoutPage />;
      default:
        return null;
    }
  };

  const BmiText = [
    [
      "Focus on exercises that promote muscle gain and strength building.",
      "Include resistance training exercises such as weightlifting, bodyweight exercises, and resistance band exercises to build muscle mass.",
      "Incorporate compound movements like squats, deadlifts, bench presses, and rows to target multiple muscle groups simultaneously.",
    ],
    [
      "Maintain a balanced exercise routine that includes cardiovascular exercises, strength training, and flexibility exercises.",
      "Engage in moderate-intensity aerobic activities such as brisk walking, cycling, swimming, or jogging for at least 150 minutes per week.",
      "Incorporate strength training exercises to build and maintain muscle mass, which helps boost metabolism and overall health.",
    ],
    [
      "Focus on exercises that promote weight loss and improve cardiovascular health.",
      "Engage in a combination of aerobic exercises and strength training to burn calories, build muscle, and increase metabolism.",
      "Incorporate activities like walking, jogging, cycling, swimming, and elliptical training for cardiovascular health.",
    ],
    [
      "Prioritize exercises that facilitate weight loss, improve cardiovascular health, and enhance overall fitness.",
      "Focus on low-impact aerobic exercises to reduce stress on joints while still burning calories, such as swimming, water aerobics, cycling, or using an elliptical machine.",
      "Gradually increase the intensity and duration of workouts to improve endurance and stamina.",
    ],
  ];

  const BmiExerciseGuidelines = {
    underweight: {
      value: BmiText[0],
      workout: [biceps, triceps, chest, back, legs],
      title: ["Biceps", "Triceps", "Chest", "Back", "Legs"],
      info: [
        "Biceps exercises target the muscles of the upper arm, specifically the biceps brachii, which is responsible for flexing the elbow joint. Strengthening these muscles not only enhances the aesthetic appearance of the arms but also improves functional strength for activities involving pulling and lifting.",
        "Triceps exercises target the muscles located on the back of the upper arm, called the triceps brachii. Strengthening these muscles not only enhances the aesthetic appearance of the arms but also improves functional strength for activities involving pushing movements.",
        "Chest exercises target the muscles of the pectoralis major and minor, which are located in the front of the upper body. Strengthening these muscles not only enhances the aesthetic appearance of the chest but also improves functional strength for pushing movements.",
        "Back exercises are essential for developing strength, stability, and muscular balance in the muscles of the back. These exercises target various muscle groups, including the latissimus dorsi, rhomboids, traps, and erector spinae, and are vital for maintaining proper posture, supporting the spine, and improving overall upper body function.",
        "Leg exercises are crucial for developing strength, power, and stability in the lower body. They target various muscle groups, including the quadriceps, hamstrings, glutes, and calves, and are essential for functional movement, athletic performance, and overall fitness.",
      ],
    },
    normalWeight: {
      value: BmiText[1],
      workout: [back, legs, abs, chest, triceps, biceps],
      title: ["Back", "Legs", "Abs", "Chest", "Triceps", "Biceps"],
      info: [
        "Back exercises are essential for developing strength, stability, and muscular balance in the muscles of the back. These exercises target various muscle groups, including the latissimus dorsi, rhomboids, traps, and erector spinae, and are vital for maintaining proper posture, supporting the spine, and improving overall upper body function.",
        "Leg exercises are crucial for developing strength, power, and stability in the lower body. They target various muscle groups, including the quadriceps, hamstrings, glutes, and calves, and are essential for functional movement, athletic performance, and overall fitness.",
        'Abdominal exercises target the muscles of the core, including the rectus abdominis (the "six-pack" muscles), obliques, and transverse abdominis. Strengthening these muscles improves core stability, enhances posture, and reduces the risk of lower back pain.',
        "Chest exercises target the muscles of the pectoralis major and minor, which are located in the front of the upper body. Strengthening these muscles not only enhances the aesthetic appearance of the chest but also improves functional strength for pushing movements.",
        "Triceps exercises target the muscles located on the back of the upper arm, called the triceps brachii. Strengthening these muscles not only enhances the aesthetic appearance of the arms but also improves functional strength for activities involving pushing movements.",
        "Biceps exercises target the muscles of the upper arm, specifically the biceps brachii, which is responsible for flexing the elbow joint. Strengthening these muscles not only enhances the aesthetic appearance of the arms but also improves functional strength for activities involving pulling and lifting.",
      ],
    },
    overweight: {
      value: BmiText[2],
      workout: [stretching, warmUp, calves],
      title: ["Stretching", "WarmUp", "Calves"],
      info: [
        "Stretching exercises are designed to improve flexibility, mobility, and range of motion in the muscles and joints. They can be performed as part of a warm-up routine before exercise or as a standalone activity to promote relaxation and reduce muscle tension",
        "Warm-up exercises are essential before engaging in any physical activity or workout routine. They prepare the body for more intense exercise by gradually increasing heart rate, circulation, and flexibility, while also reducing the risk of injury.",
        "Calves exercises specifically target the muscles of the calf, primarily the gastrocnemius and soleus muscles. Strengthening these muscles is essential for improving lower leg strength, ankle stability, and overall athletic performance.",
      ],
    },
    obese: {
      value: BmiText[3],
      workout: [shoulders, stretching, warmUp],
      title: ["Shoulders", "Stretching", "WarmUp"],
      info: [
        "Shoulder exercises target the deltoid muscles, which consist of three heads: the anterior (front), medial (side), and posterior (rear) deltoids. Strengthening these muscles improves shoulder stability, mobility, and overall upper body strength.",
        "Stretching exercises are designed to improve flexibility, mobility, and range of motion in the muscles and joints. They can be performed as part of a warm-up routine before exercise or as a standalone activity to promote relaxation and reduce muscle tension",
        "Warm-up exercises are essential before engaging in any physical activity or workout routine. They prepare the body for more intense exercise by gradually increasing heart rate, circulation, and flexibility, while also reducing the risk of injury.",
      ],
    },
  };

  return (
    <>
      <div className="absolute top-36 w-full">
        <div className="w-full flex justify-center">
          <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Your BMI: {storedData.bmi}</h1>
            <div className="text-lg">
              <h2 className="text-xl font-semibold mb-2">What You Should Follow and Why:</h2>
              {BmiExerciseGuidelines[status].value.map((value, index) => (
                <div className="flex mb-3 items-center" key={index}>
                  <BiCaretRight className="text-3xl text-blue-500 mr-2 mt-1" />
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap mt-5 p-3">
          {BmiExerciseGuidelines[status].workout.map((value, index) => {
            return (
              <div key={index} className="transition-all duration-300 flex w-10/12 border border-gray-400 p-3 justify-center rounded-xl mb-5 scale-x-95 scale-y-95 hover:scale-x-100 hover:scale-y-100 hover:shadow-2xl">
                <div>
                  <img className="w-96 h-72 border boder-black rounded-xl" src={value} alt={`Exercise ${index}`} />
                </div>
                <div className="w-10/12 ml-10 font-Oswald">
                  <h1 className=" font-bold text-3xl mt-2">{BmiExerciseGuidelines[status].title[index]}</h1>
                  <p className="text-xl mt-3">{BmiExerciseGuidelines[status].info[index]}</p>
                </div>
                <NavLink to={`/workout/specific-workout?muscles=${BmiExerciseGuidelines[status].title[index].toLowerCase()}`} >
                  <button className="absolute p-3 bg-black text-white hover:bg-red-700 border-black bottom-14 right-20 rounded-xl">Click for More</button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      {renderAlternativeComponent(search)}
    </>
  );
}

export default Workout;
