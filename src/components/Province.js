// import axios from 'axios'
// import React from 'react'

import { useState } from "react"
import City from "./City";

export default function Province() {
  const [provinceList, setProvinceList] = useState([
    {
      id: 13,
      name: "خوزستان",
      cities: null
    },

    {
      id: 1,
      name: "اردبيل",
      cities: null
    },
    {
      id: 2,
      name: "اصفهان",
      cities: null
    },
    {
      id: 3,
      name: "تهران",
      cities: null
    },
    {
      id: 4,
      name: "خراسان جنوبی",
      cities: null
    },
    {
      id: 5,
      name: "خراسان شمالی",
      cities: null
    },
    {
      id: 6,
      name: "چهارمحال بختیاری",
      cities: null
    },
    {
      id: 7,
      name: "آذربایجان شرقی",
      cities: null
    },
    {
      id: 8,
      name: "آذربایجان غربی",
      cities: null
    },
    {
      id: 9,
      name: "بوشهر",
      cities: null
    },
    {
      id: 10,
      name: "ایلام",
      cities: null
    }]);
  
  const [pId ,setPId]=useState();
 
  console.log("pid=", pId);
  const setProvinceId=(pId)=>{
  //  setPId(pId);
   
}
  return (

    <div className="flex justify-center space-between">
      <select>
        {provinceList?.map((item) => { return <option key={item.id} value={item.id} onClick={(e) => setProvinceId(7)}  >{item.name}</option> })}
      </select>
      <br></br>
      <br></br>
      <City key={pId} pId={pId}/>
    </div>
  )
}
