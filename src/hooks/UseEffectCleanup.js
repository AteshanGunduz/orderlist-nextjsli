import { useEffect, useState } from "react"




const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = ()=>{
    setSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize", checkSize)
    // return ()=>{
    // window.removeEventListener("resize", checkSize)
    // }
  },[])
  return (
    <>
    <h1>Window</h1>
    <h2>{size}px</h2>
    </>
  )
}
export default UseEffectCleanup