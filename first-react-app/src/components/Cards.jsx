import React from 'react'
import './cards.css'
import CubeRunner from '../assets/CubeRunner.png'

const Cards = (props) => {
  return (
    <div className='card' style={{overflow:'hidden'}}>
        <img src={CubeRunner} alt="Cube Runner" width={350} style = {{border:"5px solid green"}} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Cards