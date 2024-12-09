import React, { useEffect } from 'react'
import { useState } from "react"
export default function City({ ID }) {
      const [citylList, setCityList] = useState([
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
                        id: 10,
                        name: "ايلام",
                        cities: null
                  }
            },
            {
                  id: 162,
                  name: "اسكو",
                  province: {
                        id: 7,
                        name: "آذربايجان شرقي",
                        cities: null
                  }
            },
            {
                  id: 163,
                  name: "اهر",
                  province: {
                        id: 7,
                        name: "آذربايجان شرقي",
                        cities: null
                  }
            }
      ])
      const [cityListTemp, setCityListTemp] = useState(citylList);
      useEffect(() => filterCityList(ID), [ID]);
      //console.log("ID" , ID);
      const filterCityList = (ID) => {
            const newCityList = citylList.filter((item) => item.province.id == ID);
            setCityListTemp(newCityList);
          //  console.log("Temp", cityListTemp);
      }
      console.log("Tempppppppppppp", cityListTemp);
      
      return (
            <div>
                  <select>
                        {cityListTemp.length> 0 ?
                              cityListTemp.map((item) => { return <option key={item.id} value={item.id}>{item.name +" استان "+ item.province.name}</option> }):
                              <option>هیچ اطلاعاتی یافت نشد</option>
                        }
                  </select>
            </div>
      )
}
