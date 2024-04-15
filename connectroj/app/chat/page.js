"use client"

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Cookies from "js-cookie";
import { AuthContext } from '../context/AuthContext';

const ChatSection = () => {
  const [udata,setUdata] =useState();
  const auth = useContext(AuthContext);
    console.log(auth.user);
  useEffect(() => {
    
    const getUser =async () =>{
      try {
        const user = await axios.get(`/api/user/allUser`,{
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${Cookies.get("connectroj")}`
          },
          withCredentials: true,
        });
        console.log(user.data.user);
        setUdata(user.data.user);
        auth.setUser(user.data.user);
      } catch (error) {
        console.warn(error);
      }
    }
    getUser();
    
  }, [])
  console.log(udata);
  return (
    <div>ChatSection</div>
  )
}

export default ChatSection