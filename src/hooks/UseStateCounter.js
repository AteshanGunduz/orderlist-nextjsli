import { useState } from "react"



const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const handleUpdate = ()=>{
    setValue((p)=>p+1)
    setValue((p)=>p+1)
  }
    // 2 şer artması için içinde bir callback function ekledik. içine function eklemesydik asenkrom olarak 2 şer artmıyordu. bu haliyle çalışıyor.
  const reset = ()=>{
    setValue(0)
  }
  const increase = ()=>{
    setTimeout(()=>{
        setValue((pre)=> pre + 1)
    },2000)
  }
  // tıkladıktan 2 saniye sonra çalış. içinde setvalue içinde function ile + 1 arttırdığım için 2 saniye içinde 10 kere tıklarasam 2 saniye sonra 10 artıyor.

  return (
    <>
    <section style={{margin: "4rem 0"}}>
        <h2>Counter</h2>
        <h3>{value}</h3>
        <button onClick={()=>setValue(value -1)}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={()=>setValue(value +1)}>+</button>
        <button onClick={handleUpdate}>+2</button>
    </section>
    <section style={{margin: "4rem 0"}}>
        <h2>Counter2</h2>
        <h3>{value}</h3>
        <button onClick={increase}>🐢 slow +</button>
    </section>
    </>
  )
}

export default UseStateCounter