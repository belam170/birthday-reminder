import React, { useEffect, useState } from 'react'
import data from './Data'
function List() {
    const [people,setPeople] = useState(data)

  

  return (
    <div className='box'>
        <h3>{people.length} Birthday people</h3>
      {people.map((t)=>
      <div key={t.id} className="box-1">
         <img src={t.profile} alt='not available' />
         <div className='name'>
        <h1>{t.username}</h1>
        <p>{t.age} years</p>
        </div>
      </div>)}
      <div className='box-2'>
      <button onClick={()=>setPeople([])}>Clear all</button>
      </div>
    </div>
  )
}

export default List