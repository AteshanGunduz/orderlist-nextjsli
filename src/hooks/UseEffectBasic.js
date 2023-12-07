import { useEffect, useState } from "react"



const UseEffectBasic = () => {
    const [value, setValue] = useState(0)
    useEffect(()=>{
        if(value >= 1){
        document.title = `Yeni Mesajlar (${value})`}
    },[value])
  return (
    <>
    <h1>{value}</h1>
    <button onClick={()=> setValue((pre)=> pre +1)}>Tıkla</button>
    </>
  )
}
export default UseEffectBasic