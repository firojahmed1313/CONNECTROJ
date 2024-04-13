"use client"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import Cookies from "js-cookie";
export default function Home() {
  const [data, setData] = useState();
  const auth = useContext(AuthContext);
  useEffect(() => {
    const cookie = Cookies.get('connectroj');
    if (cookie) {
      auth.setIsLogIn(true)
    }
  }, []);

  const addUser = () => {
    let name = "firoj";
    let email = "f@f";
    let password = "12345";

    const fetchData = async () => {
      try {
        const id = "65f4228ef24b41db8a8a1757";
        const response = await axios.get(`api/user/${id}`);
        console.log(response);
        //setData(response.data.message);
      } catch (error) {
        console.warn(error)
      }

    };
    fetchData();
  }
  return (
    <main className="flex min-h-[80dvh] flex-col items-center justify-between p-4">
      <h2>MD FIROJ AHMED</h2>
      <button onClick={addUser}>click</button>



    </main>
  );
}
