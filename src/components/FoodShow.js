// <FoodShow food={food} key={food.id}/>  food ismiyle gönderdiğimiz nesneleri burda kullanmak için {food} şeklinde parametreye giriyoruz.

import { useContext, useState } from "react"
import FoodEdit from "./FoodEdit"
import FoodContext from "@/context/food"

// Burda yapmaya çalıştığım App ile burası arasında bir bağ kurmak.
// X tıkladığım Appdeki nesnede  seçili nesne yi silmem gerekiyor.
//Bunun için fonksiyon aracılığı ile 2 yönlü bir tünel kurmak
// function ı App de kurucam buraya göndericem burdaki bilgiyle appde geri çalıştırıcam. Tıpkı app-foodcreate de yaptığım ilişki gibi.

// bir önceki değere bağlı değişimlerde set in içine fonksiyon koyuyoruz.setShowEdit((pre)=>!pre) false u true yap dedik.

// content ve handleeditclick lede showEdit false ise title ı göster tıklayıp true yapıncada foodedit sayfasını göster dedik.


const FoodShow = ({food}) => {
  const [showEdit, setShowEdit] = useState(false)
  const {deleteFoodById} = useContext(FoodContext)
  const handleDeleteClick = ()=>{
    deleteFoodById(food.id)
  }
  const handleEditClick = ()=>{
    setShowEdit((pre)=>!pre)
  }
  const handleSubmit = ()=>{
    setShowEdit(false)
  }

  let content = showEdit ? <FoodEdit food={food} onSubmit={handleSubmit}/> : <h3>{food.title}</h3>

  return (
    <div className="food-show">
      <div className="food-background" style={{backgroundImage: `url(https://picsum.photos/seed/${food.id}/300/200)`}}></div>
      <div className="food-content">{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}></button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default FoodShow


// handleClick taa APP den getirdiğimiz onDelete i food.id ile çalıştır dedik. böylece tıklandığında ondelete appdeki food dan burdaki tıklanmış food.id si ike siliyor.