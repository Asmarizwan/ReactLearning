import React from "react";


export default function FunctionEvent()
{
    const handleClick=()=>{
        console.log('button is clicked')
    }
return <div>
    <button onClick={handleClick}>Click Me</button>
</div>
}