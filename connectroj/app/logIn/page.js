"use client"
import axios from 'axios';
import React, { useState } from 'react'

const logInUser = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const logInUser=async() => {
        console.log(email,password);
        try {
            const userData= await axios.post('https://3000-firojahmed131-rojtalker-yvc8lu2qx16.ws-us110.gitpod.io/api/auth/logIn', {email,password});
            console.log(userData);
            if(userData.status===200){
                window.location.href="/chat";
            }
        } catch (error) {
            console.warn(error);
        }
    }
  return (
    <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 m-auto border w-[90%] mt-10 rounded-2xl bg-lime-100 ">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">LogIn Page</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        
                        <div className="p-2 w-full">
                            <button onClick={logInUser} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">LogIn</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
  )
}

export default logInUser