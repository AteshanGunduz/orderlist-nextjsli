import { useState } from "react"



const UseStateObject = () => {
  const [person, setPerson] = useState({
      name: "Murat",
      age: 37,
      text: "Hello"
  })
  //person useState içindeki object oldu.

//   const [name, setName] = useState("Murat")
//   const [age, setAge] = useState("37")
//   const [text, setText] = useState("Hello")

  const changeText = ()=>{
    setPerson({...person, text: "Hello Word"})
    // setText("Hello World")
  }
  // ...person içini al, text: "Hello Word" ile yeni bir aray çıkardık.

  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.text}</h3>
    <button onClick={changeText}>Metni Değiştir</button>
    </>
  )

}
export default UseStateObject