import React from 'react'
import axios from 'axios'
import Button from '../components/Button'
import {Heading} from '../components/Heading'
import InputBox from '../components/InputBox'
import { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
function Transfer() {
    const [username,setUsername]=useState("");
    const [userid,setUserid]=useState("");
    const [Amount,setAmount]=useState(0);
    const location=useLocation();
    console.log(username);
    const handleTransfer=async ()=>{
            try{
                const authToken="Bearer" +" " + localStorage.getItem("token");
                console.log(authToken);
                const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                                    amount: Amount,
                        to: userid
}, {
  headers: {
    'Authorization': authToken
  }
});
                if(response.status==200){
                    console.log("transaction success");
                }
            }
            catch(err){
                console.log(err);
            }
    }
    useEffect(()=>{
        const searchParams=new URLSearchParams(location.search);
        setUsername(searchParams.get('firstname'));
        setUserid(searchParams.get('userId'));
    },[location]);
  return (
    <div className='flex justify-center  bg-white'>
        <div className='h-[100vh]  w-80 flex flex-col justify-center '>
            <div className='bg-white p-4 rounded-md shadow-md border-black border-[2px]'>
                <Heading label={"send money"}/>
                <InputBox label={username} placeholder={"Enter money in Rupees"} onChange={(e)=>{
                    setAmount(e.target.value);
                }}></InputBox>
                <Button buttontext={"Initiate Transfer"} onClick={handleTransfer}></Button>
            </div>
        </div>
    </div>
  )
}

export default Transfer