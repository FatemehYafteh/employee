
import { useEffect, useState } from "react"
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


  const [ID, setPId] = useState();
  const handlechange = (e) => {
    // console.log("id:", e.target.value)
    setPId(e.target.value);
  }
  console.log("setpid : ", ID)
  // const setProvinceId = (pId) => {
    // setPId(pId);
  // }
  // useEffect(()=>console.log("ID :", ID),[ID]);
  return (

    <div className="flex justify-center m-6">
      <select onChange={handlechange} >
        {provinceList?.map((item) => { return <option key={item.id} value={item.id} >{item.name}</option> })}
      </select>
      
      <City key={ID}
        ID={ID}
      />
      {/* <button className="bg bg-red-300" onClick={(e)=>console.log("ID :", (e.target.value) )}>click meeeeeeeeee </button> */}
    </div>
  )
}
// onClick={(e)=>setProvinceId(e.target.value)} 