"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  /*useEffect(() => {
    
  }, []); */
  const addUser = () => {
    let name = "firoj";
    let email = "f@f";
    let password = "12345";

    const fetchData = async () => {
      try {
        const id="65f4228ef24b41db8a8a1758";
        const response = await axios.get(`https://3000-firojahmed131-rojtalker-yvc8lu2qx16.ws-us110.gitpod.io/api/user/${id}`);
        console.log(response);
        //setData(response.data.message);
      } catch (error) {
        console.warn(error)
      }

    };
    fetchData();
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>MD FIROJ AHMED</h2>
      <button onClick={addUser}>click</button>



    </main>
  );
}
