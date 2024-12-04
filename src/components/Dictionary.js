import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dictionary() {
    const [word,setWord]=useState('');
    const navigate= useNavigate();
    const handleSearch =()=>{
      navigate("/Difinitions/" + word);
    }
  return (
    <div className='flex justify-center'>
     <form onSubmit={()=>handleSearch()}>
     <input className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="search..." type='text' onChange={(e)=>{setWord(e.target.value)}}></input>
     <button className="rounded-md items-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type='submit'>Search...</button>
     </form> 
    </div>
  )
}
 