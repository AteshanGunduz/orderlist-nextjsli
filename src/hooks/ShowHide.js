import { useEffect, useState } from "react"

//setShow((pre)=>!pre)} bu arkadaş aslında setShow(!show) callback li hali.

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    <button onClick={() => setShow((pre)=>!pre)}>Göster/Gizle</button>
    {show && <Item/>}
    </>
  )
}

// [] use effect boş verdiğim zaman ilk renderda çalışır sonraki renderlarda çalışmaz.

const Item = ()=>{
  const [size, setSize]=useState(window.innerWidth)
  const checkSize = ()=>{
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener("resize", checkSize)
    return()=>{
      window.removeEventListener("resize", checkSize)
    }
  },[])

  return(
    <div style={{marginTop: "1rem"}}>
      <h1>Window</h1>
      <h2>Size: {size}</h2>
    </div>
  )
}


export default ShowHide