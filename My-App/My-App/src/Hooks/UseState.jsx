import { useState } from "react";

var UseState = ()=>
{
    var initialValue = 0
    var [num,setNum] = useState(initialValue)
    return <div>
                <h1>Tiis is useState example</h1>
                <button onMouseEnter={()=>setNum(num=num-1)}>-</button>
                <h3>The number is {num}</h3>
                <button onKeyDown={()=>setNum(num = num + 1)}>+</button>
                <button onDoubleClick={()=>setNum(initialValue)}>Reset</button>
            </div>
}

export default UseState