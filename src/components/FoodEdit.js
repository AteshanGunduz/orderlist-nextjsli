import FoodContext from "@/context/food"
import { useContext, useState } from "react"




const FoodEdit = ({food, onSubmit}) => {
  const [title, setTitle] = useState(food.title)
  const {editFoodById} = useContext(FoodContext)
  const handleChange = (e)=>{
    setTitle(e.target.value)
  }

  // app den gönderdiğimiz onEdit isimlendirilmiş function ı mızı burda çalıştırıyoruz. 2 parametresi vardı. tıkladığımız food.id si ve değiştirdiğimiz yeni title ile çalıştırıyoruz

  //foodshow da oluşturduğumuz onsubmit ismiyle getirdiğimiz function u burda save ederken çalıştırıyoruz ki orda çalışsın
  // orda false çevirsin görseli değiştirsin.

  const handleSubmit = (e)=>{
    e.preventDefault()
    editFoodById(food.id, title)
    onSubmit()
  }
  return (
    <form className="food-edit" onSubmit={handleSubmit}>
    <input className="input" onChange={handleChange} value={title} />
    <button className="button">Save</button>
    </form>
  )
}
export default FoodEdit