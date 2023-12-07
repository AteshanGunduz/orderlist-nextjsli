import { useState } from "react" // Hazır bir react function hookladık reactten. Hazır fonksiyon içine verdiğimiz değeri fonksiyonundan geçirir.


const UseStateBasic = () => {
//   const state = useState(1)[0]
//   const setterFunction = useState(1)[1]
//   console.log(state);
//   console.log(setterFunction)

const [text, setText] = useState("Engin")   // ["Engin",f] engin ile içindeki fonksiyonu çalıştırıyor. text engin ile setText fonksiyon ile eşleşşiyor. Destructure
const handleClick = ()=> {
    if(text === "Engin"){
    setText("Namık")
    } else {
    setText("Engin")
    }  
}

  return (
    <>
   <h1>{text}</h1>
   <button onClick={handleClick}>Değiştir</button>
    </>
  )
}

export default UseStateBasic

//useState kullanarak engini namık yaptık buttona tıklayarak. if ile de engin ise namıka çevirmesini sağladık.