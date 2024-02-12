import React, { useState } from 'react';
import SubHeading from '../components/SubHeading';
import { Heading } from '../components/Heading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import axios from 'axios';
import BottomWarning from '../components/BottomWarning';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate=useNavigate();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage,seterrorMessage]=useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        username,
        firstName,
        lastName,
        password
      });
      if(response.status==200){
        navigate("/signin");
      }
      else{
        seterrorMessage("An Error occured during signup try again!");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      seterrorMessage("Error signing up");
    }
  };

  return (
    <div className='h-[100vh] flex justify-items-center justify-center'>
      <div className='flex flex-col justify-center'>
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-md">
          <Heading label={"sign up"} />
          <SubHeading heading={"Enter your details to sign up"} />
          <InputBox
            label={"Username"}
            placeholder={"Enter your email"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            label={"First Name"}
            placeholder={"Enter your first name"}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBox
            label={"Last Name"}
            placeholder={"Enter your last name"}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputBox
            label={"Password"}
            placeholder={"Enter your password"}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button buttontext={"Signup"} onClick={handleSignup} />
          {errorMessage && <p className='text-red-700'>{errorMessage}</p>}
          <BottomWarning label={"Already have an account"} buttonText={"signin"} to={"/signin"}/>
        </div>
      </div>
    </div>
  );
}

export default Signup;
