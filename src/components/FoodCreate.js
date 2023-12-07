// Burası yazılanı alıp App göndermek için var burası ki APP de bilgileri foods a yerleştirsin.

import FoodContext from "@/context/food"
import { useContext, useState } from "react"


// onCreate App.js de atadığımız isim onu burda kullabiliriz.
const FoodCreate = () => {
  const {createFood} = useContext(FoodContext)
  const [title, setTitle] = useState("")
  const handleChange = (event)=>{
   setTitle(event.target.value)   // title a inputdaki bilgiyi atadık.
  }
  const handleSubmit = (event)=>{
   event.preventDefault()      //form  yenilendiğinde bilgileri tutsun diye yazdık.
   createFood(title)   // submit edince title ı gönderiyoruz. App.js deki functionda çalışacak yada o function burda call landı. 
   setTitle("") 
   // Title yazılıp gönderildikten sonra tekrar boşaltıyoruz.
   // Input boş gözüksün.
  }
  return (
    <div className="food-create">
      <h3>Food List</h3>
      <form onSubmit={handleSubmit}> 
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Submit</button>
      </form>
    </div>
  )
}
export default FoodCreate