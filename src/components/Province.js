// import axios from 'axios'
// import React from 'react'

import { useState } from "react"

export default function Province() {
//     const body={
//         userName :'',
//         password:''
//         }
//         const config ={
//             headers :{
//                 'content-type':''
//             }
//         }
//  const response= axios.post("" ,body,config)
//  .then((res)=>  {return (res.data);})
const [provinceList,setProvinceList]=useState([
    {
        id: 13,
        name: "خوزستان",
        cities: null
      },

{
 id: 1,
name: "اردبيل",
    province: null
  },
  {
    id: 2,
    name: "اصفهان",
    province: null
  },
  {
    id: 3,
    name: "تهران",
    province: null
  },
  {
    id: 4,
    name: "خراسان جنوبی",
    province: null
  },
  {
    id: 5,
    name: "خراسان شمالی",
    province: null
  },
  {
    id: 6,
    name: "چهارمحال بختیاری",
    provinc: null
  },
  {
    id: 7,
    name: "آذربایجان شرقی",
    province: null
  },
  {
    id: 8,
    name: "آذربایجان غربی",
    province: null
  },
  {
    id: 9,
    name: "بوشهر",
    province: null
  },
  {
    id: 10,
    name: "ایلام",
    province: null
  }])

  const [cityModelList , setcityModelList]=useState([
    {
        id: 530,
        name: "ميداود",
        province: {
          id: 13,
          name: "خوزستان",
          cities: null
        }
      },
      {
        id: 531,
        name: "مينوشهر",
        province: {
          id: 13,
          name: "خوزستان",
          cities: null
        }
      },
      {
        id: 532,
        name: "ويس",
        province: {
          id: 13,
          name: "خوزستان",
          cities: null
        }
      },
      {
        id: 533,
        name: "هفتگل",
        province: {
          id: 13,
          name: "خوزستان",
          cities: null
        }
        },
    
        {
            id: 161,
            name: "ميمه",
            province: {
              id: 4,
              name: "ايلام",
              cities: null
            }
          },
          {
            id: 162,
            name: "اسكو",
            province: {
              id: 5,
              name: "آذربايجان شرقي",
              cities: null
            }
          },
          {
            id: 163,
            name: "اهر",
            province: {
              id: 5,
              name: "آذربايجان شرقي",
              cities: null
            }
          }
  ])
 const filterCityList=(pId)=>{
    const newCityList=cityModelList.filter((item)=>item.province.id == pId);
    setcityModelList (newCityList);
  }
    return (
    
    <div className="flex justify-center space-between">
      <select>
       {provinceList?.map((item)=>{return  <option key={item.id} onClick={(e)=>(console.log(e.target.value))} value={item.id}>{item.name}</option>})}
      </select>
      <select>
       {cityModelList?.map((item)=>{return  <option key={item.id} onClick={(e)=>(console.log(e.target.value))} value={item.id}>{item.name + " استان " + item.province.name}</option>})}
      </select>
    </div>
  )
}
