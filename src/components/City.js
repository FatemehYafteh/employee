import React, { useEffect } from 'react'
import { useState } from "react"
export default function City({ pId }) {
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
      useEffect(() => filterCityList(pId), [pId]);
      const filterCityList = (pId) => {
            //console.log("Temp",cityListTemp);
            //console.log("pId",pId);
            const newCityList = citylList.filter((item) => item.province.id == pId);
           // console.log("newCityList",newCityList);
            setCityListTemp(newCityList);
          
           // console.log("pId",pId);
      }
      return (
            <div>
                  <select>
                        {cityListTemp.length > 0 ?
                              cityListTemp.map((item) => { return <option key={item.id} onClick={(e) => (console.log(e.target.value))} value={item.id}>{item.name + " استان " + item.province.name}</option> }) :
                              <option>هیچ اطلاعاتی یافت نشد</option>}
                  </select>
            </div>
      )
}
