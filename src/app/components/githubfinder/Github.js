"use client"
import React, { useState } from 'react'
import './Github.css'; 
import Repos from './Repos'
import Inputform from './Inputform'
import Repodata from './Repodata'
export default function Github() {
    const [gitdata,setGitdata] = useState(null)
    const [repoData, setRepodata] = useState([])
    const fetchData = async(username)=>{
        try{
            const responseData = await fetch(`https://api.github.com/users/${username}`)
            const data = await responseData.json()
            setGitdata(data)
            console.log(data)
       
        
           const repoUrl = await fetch(data.repos_url)
           const getdata = await repoUrl.json()
           setRepodata(getdata)
        } catch{
                throw new Error("not working")
        }
    }
    
  return (
    
        <div className="container">
            
            <Inputform fetchData={fetchData} />
            {gitdata && <Repodata repo={gitdata} />}
            {repoData && <Repos repos={repoData} />}
        </div>
       
    
  )
}
