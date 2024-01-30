"use client"
import React, { useState } from 'react'

export default function Inputform({fetchData}) {
  const [input,setInput] = useState()
 const handlechange=(e)=>{
  e.preventDefault()
  fetchData(input)
 }

  return (
    <div>
      <form onSubmit={handlechange} className='f1'>
        <input className='input' placeholder='Enter Github username' type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <input className='btnn' type='submit' value="Find "/>
      </form>
    </div>
  )
}
