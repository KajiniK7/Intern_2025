import { useEffect,useState } from "react"
const UseEffect = ()=>
{
    var [text,setText] = useState("")
    var handle = (e)=>{
        setText(e.target.value)
    }
    useEffect(()=>
    {
        setText('HariDharsaun')
    },[text])
    return (
        <div>
            <h1>This is UseEffect Example</h1>
            <input type="text"  value={text} placeholder="Enter text here" onChange={handle}/>
            <h3>The Text is {text} </h3>
        </div>
    )
}

export default UseEffect