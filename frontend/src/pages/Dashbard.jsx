import React from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Dashbard() {
  const [balance,setBalance]=useState(0);
  const [users,setUsers]=useState([]);
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetchBalance= async ()=>{
      const authToken="Bearer" +" " + localStorage.getItem("token");
      const response= await axios.get("http://localhost:3000/api/v1/account/balance", {
  headers: {
    'Authorization':authToken
  }
  })
    setBalance(response.data.balance);
    }
    fetchBalance();
  },[])
  const handleSearch=async(search)=>{
    try{
      const res=await axios.get("http://localhost:3000/api/v1/user/bulk",{
        params:{
          filter:search
        }
      })
      setUsers(res.data.user);
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <AppBar PayU={"payU"} name={"pavan"}/>
      <Balance value={balance.toFixed(2)}/>
      <Users/>
 <div className='flex m-3 '>
            <div><input onChange={(e)=>{
              setSearch(e.target.value)
            }}  type='text' placeholder='enter username..' className='w-[30vw] bg-slate-100 border-slate-500 px-4 py-2'/></div>
            <button className='bg-slate-700 text-white px-3 hover:bg-black cursor-pointer ml-3 'onClick={()=>handleSearch(search)} >Search</button>
        </div> 
        <div>
         
        <ul className='text-lg ml-3 w-[50vw] font-medium'>
        {users.map(user => (
          <li key={user._id} className='w-full flex mb-3'>
            <p className='w-[40%]'>{user.firstname}</p>
            <button  className='bg-slate-700 text-white px-2 hover:bg-black cursor-pointer'>Transfer Money</button>
          </li>
        ))}
      </ul>
        </div>
    </div>
  )
}

export default Dashbard