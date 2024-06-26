"use client"
import Cookies from 'js-cookie'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '@/app/context/AuthContext';
const Navber = () => {
    const auth = useContext(AuthContext);
    useEffect(() => {
        const cookie = Cookies.get('connectroj');
        if (cookie) {
            auth.setIsLogIn(true)
        }
    }, []);
    console.log(auth.isLogIn);

    const DeleteCookies = () => {
        Cookies.remove("connectroj");
        auth.setIsLogIn(false);
        auth.setUser(null);
        window.location.href = "/";
    }
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <Link href={"/"}><span className="ml-3 text-xl">CONNECTROJ</span></Link>
                </div>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    {
                        (auth.isLogIn) ? <>
                            <Link href={"/chat"} className="mr-5 hover:text-gray-900">
                                <h3>Chat</h3>
                            </Link>
                            <p >{auth?.user?.name}</p>
                        </> :
                            <>
                                <Link href={"/register"} className="mr-5 hover:text-gray-900">
                                    <h3>Register</h3>
                                </Link>
                                <Link href={"/logIn"} className="mr-5 hover:text-gray-900">
                                    <h3>LogIn</h3>
                                </Link>
                            </>

                    }


                </nav>
                <button onClick={DeleteCookies} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogOut
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header >
    )
}

export default Navber