import React, {useState} from 'react'
import './grocerylist.css'

const grocerylist = () => {

    const [items, setIteam] = useState([
        {
          ID : 1,
          Name : "Tomato",
          Colour : "Red",
          Price : "25 RS"
        },
        {
          ID : 2,
          Name : "Potato" ,
          Colour : "Brown",
          Price : "20 Rs"
        },
        {
          ID : 3 ,
          Name : "LeadyFinger",
          Colour : " Green",
          Price : "30 Rs"
        },
    
      ])

      const Grocery = ({items}) => {
        return (
          <div className="grocery-box">
            <div className="groceryitem">{items.Name}</div>
            <div className="groceryitem">{items.Colour}</div>
            <div className="groceryitem">{items.Price}</div>
          </div>
        )
      }

  return (
    <div className="grocery-container">
        {items.map(item => {
            return <Grocery key={item.ID} items={item}/>
        })}
    </div>
  )
}

export default grocerylist