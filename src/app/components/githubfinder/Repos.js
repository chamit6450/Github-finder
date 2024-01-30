import React from 'react'

export default function Repos({repos}) {
  return (
    <div>
        <ul>
                
            {repos.map((item,index)=><li key={index}>
                <a className='reponame' href={item.html_url}>{item.name}</a>
            </li>)}
        </ul>
    </div>
  )
}
