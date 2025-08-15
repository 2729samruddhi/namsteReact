import React, { useState } from 'react'

const User = ({name}) => {
    const [count,setCount] = useState(0)
  return (
    <div className='user-card'>
      <h2>count: {count}</h2>
      <button onClick={()=>{
          setCount(count+1)
      }}> increase count</button>
      <h2>Name: {name}</h2>
      <h3>Location: kolhapur</h3>
      <h3>contact: sam@gmail.com</h3>
    </div>
  )
}

export default User
