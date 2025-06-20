import React, { useEffect, useState ,useRef} from 'react'
import './counter.css'
const counter = () => {
    const [count, setCount] = useState(0);
    const a = useRef(0);
    const inc = useRef(null);
    const dec = useRef(null);
    // useEffect(() => {
    //     alert("Count Was Changed")
    // }, [count])
    useEffect(() => {
        inc.current.style.backgroundColor = "green";        // DOM Manipulation using useRef
        dec.current.style.backgroundColor = "red";
    }, [])
    useEffect(() => {
      // alert("Run on Every Render of Counter Component")
      console.log("Counter Component Rendered")
      a.current = a.current + 1;
      console.log(`A is modified to ${a.current}`)
    })


    
    
  return (
    <div className='counter'>
        <h1>{count}</h1>
        <div className='buttons'>
            <button ref={inc} onClick={() => setCount(count + 1)}>Increment</button>
            <button ref={dec} onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    </div>
  )
}

export default counter