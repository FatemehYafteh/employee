import React, { useEffect, useState } from 'react'
import {v4 as uuid4} from 'uuid'
import { useParams } from 'react-router-dom';
export default function Definitions() {
   const [meaning,setMeaning]=useState();
   const {searchTerm} = useParams();
   let i=0;
    useEffect(()=>{
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ searchTerm)
.then((response) =>response.json())
.then((data) => setMeaning(data[0].meanings));
    },[])
  return (
    <div>
      {meaning? meaning.map((item) =>{
        return(
            <p key={uuid4()}>
              {++i + ")"} 
                { item.definitions.map((def , index)=> (
                  <span key={index}>
               { def.definition}
               <br/>
               </span>
              ))}
                 </p>
        )
      }): <p>No data</p>

      }
    </div>
  )
}
