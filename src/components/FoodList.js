// Doldurduğum foods u maplemek için Burası var. tek tek neslere bölsün.

import FoodContext from "@/context/food"
import FoodShow from "./FoodShow"
import { useContext } from "react"

// gönderilen foods burda kullanıcaz.  <FoodList foods={foods}/>
// foods burda parametreye argüman olarak geldi.
// onDelete e buraya gelmezi için parametreye yazılması lazım ordanda göndericez bunu food show burda hiç işi yok aslında burası ara yol.

const FoodList = () => {
  const {foods} = useContext(FoodContext)
  const renderedFoods = foods.map(food=>{
    return <FoodShow food={food} key={food.id}/>
  })
  return (
    <div className="food-list">
      {renderedFoods}
      </div>
  )
}
export default FoodList

// food={food} food ismiyle foodları FoodShow a gönderiyoruz

//key={food.id} ile idleride tekrar irdeliyoruz her nesnenin id sinide al diyoruz. react istiyor böyle şeyler

// foods.map yaparak içindeki her nesneyi foodShow a göndrerek bas diyoruz bunuda renderedFoods a atfediyoruz onuda aşağısında div içinde <div>{renderedFoods}</div>  şekildre bas diyoruz ASLINDA <FoodShow/> BASIYORUZ.

// kaç liste itemi girdiysem o kadar rendered food yani <FoodShow/>  basıyor ekrana

