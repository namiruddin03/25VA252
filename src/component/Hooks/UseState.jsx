import React, { useState } from 'react'

function UseState() {
    const[color, setColor] = useState("green");

    const mouseover=()=>{
        // setColor("green");
        setColor(color == "green" ? "red" : "green");
    }
    
    // counter 
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
     }

    const decrement=()=>{
            setCount(count-1);
        }

    const reset=()=>{
            setCount(0);
        }   

  return (
    <>
    <h1>UseState</h1>
    <p style={{ color: color }} onMouseOver={mouseover}>This is a simple UseState example. Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Incidunt nihil vero cupiditate fuga nisi veritatis praesentium beatae nulla ullam 
        repellendus, quod aliquam accusantium eligendi repellat, sequi perspiciatis assumenda perferendis ipsa?</p>

        <div>
            <h2>{count}</h2>
            <botton onClick={increment}>+</botton>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    </>
    
  )
}

export default UseState