import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './component/Body/Body.jsx'
import DietPlan from './component/DietPlan/DietPlane.jsx'
import { ExerciseHomePage } from './component/ExersiceHomePage/ExerciseHomePage.jsx'
import Workout from './component/Exercise/Workout.jsx'
// import SupportChat from './component/SupportChatBox/SupportChat.jsx'
import Form from './component/HealthForm/Form.jsx'
import Login from './component/Login/Login.jsx'
import Diet from './component/Diet/Diet.jsx'
import Alternative from './component/Diet/Alternative.jsx'
import User from './component/User/User.jsx'
import WorkoutPage from './component/Exercise/WorkoutPage.jsx'
import Chatpage from './component/ComunityRoom/ChatPage.jsx'
import Yoga from './component/Yoga/Yoga.jsx'
import SignUpAndForm from './component/Login/SignUpAndForm.jsx'
import Signup from './component/Login/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <>
          <Body />
          <DietPlan />
          <ExerciseHomePage />
        </>
      },
      {
        path: "/yoga",
        element: <Yoga />
      },
      {
        path: "/community-room",
        element: <Chatpage />
      },
      {
        path: "/diet/",
        element: <Diet />
      },
      {
        path: "/diet/food",
        element: <Alternative />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/login/signup",
        element: <Signup />
      },
      {
        path: "/login/signup/register",
        element: <Form />
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/workout",
        element: <Workout />
      },
      {
        path: "/workout/specific-workout",
        element: <WorkoutPage />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
