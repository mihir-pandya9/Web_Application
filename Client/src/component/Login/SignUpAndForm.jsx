import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Signup from "./Signup";
import Form from "../HealthForm/Form";

const SignUpAndForm = () => {
  const [showSignup, setShowSignup] = useState(true);
  const [signupFormValues, setSignupFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignupFormChange = (name, value) => {
    setSignupFormValues({
      ...signupFormValues,
      [name]: value
    });
  };

  const goToRegistrationForm = () => {
    // Store signupFormValues in localStorage or pass it to the Form component
    localStorage.setItem("signupFormValues", JSON.stringify(signupFormValues));
    window.location.href = "http://localhost:5173/login/signup/register";
  };

  const handleBackToSignupClick = () => {
    setShowSignup(true);
  };

  return (
    <div>
      {showSignup ? (
        <Signup
          formValues={signupFormValues}
          onChange={handleSignupFormChange}
        />
      ) : (
        <Form />
      )}
      <button onClick={goToRegistrationForm}>Go to Registration Form</button>
      {showSignup && <button onClick={handleBackToSignupClick}>Back to Signup Form</button>}
    </div>
  );
};


export default SignUpAndForm;
