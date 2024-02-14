import React from 'react'
import { Heading } from '../components/Heading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';
function Signin() {
  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [errorMessage,seterrorMessage]=useState("");
  const handleSignin=async ()=>{
    try{
    const response=await axios.post("http://localhost:3000/api/v1/account/transfer",{
      username,
      password,
    })
    if(response.status==200){
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("login",true);
      navigate("/dashboard");
    }
    else{
      seterrorMessage("An Error occured during signup try again!");
    }
  }
  catch(error){
    seterrorMessage("Error signing up");
  }
}
  return (
    <div className='h-[100vh] flex justify-items-center justify-center'>
      <div className='flex flex-col justify-center'>
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-md">
          
            <Heading label={"sign in"}/>
            <InputBox label={"username"} placeholder={"example@gmail.com"} onChange={(e)=>{
              setUsername(e.target.value)
            }}/>
            <InputBox label={"password"} placeholder={"password"} type={"password"} onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
            <Button buttontext={"signin"} onClick={handleSignin}/>
            {errorMessage && <p className='text-red-700'>{errorMessage}</p>}
        </div>
      </div>
    </div>
  )
}

export default Signin