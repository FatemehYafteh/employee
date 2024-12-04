// import axios from 'axios'
// import React from 'react'

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
const provincModelist=[

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
  }]
    return (
    
    <div>
      <select>
       {provincModelist?.map((item)=>{return  <option value={item.id}>{item.name}</option>})}
      </select>
    </div>
  )
}
