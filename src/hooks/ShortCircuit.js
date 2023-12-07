import { useState } from "react"



const ShortCircuit = () => {
  const [text, setText] = useState("")
  const [isError, setIsError] = useState(false)
  
  return (
    <>
    <h1>{text || "murat"}</h1>
    <button onClick={()=>setIsError(!isError)}>Toggle Error</button>
    {isError ? <h1>Error...</h1> : <div><h2>No Error</h2></div>}
    </>
  )
}
export default ShortCircuit