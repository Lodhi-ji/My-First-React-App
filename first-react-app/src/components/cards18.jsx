import React from 'react'



const Cards = (props) => {
  return (
    <div className='card' style={{overflow:'hidden'}}>
        <h1>{props.userId}</h1>
        <p>{props.id}</p>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
  )
}

export default Cards