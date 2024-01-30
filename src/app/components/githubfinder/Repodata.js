
import React from 'react'
import './Github';
export default function Repodata({repo}) {
  return (
    <div className='repoDiv'>
       <div className='head'> 
         <img src={repo.avatar_url} alt="profile pic" /> <br />
         <h1>{repo.name}</h1>
        </div>
        <div className='f'>
        <strong className='f1'>Followers: {repo.followers}</strong> 
        <strong className='f2'>Following: {repo.following}</strong> <br />
        </div>

        <p>Description: {repo.bio}</p>
        <h2>Public Repositories: {repo.public_repos}</h2>
    </div>
  )
}
