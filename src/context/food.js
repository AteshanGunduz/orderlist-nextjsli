import { createContext, useState } from "react";
import axios from "axios"

//{children} özel bir prop alt componentları kapsıyor.

const FoodContext = createContext()

const Provider = ({children})=>{
const [foods, setFoods] = useState([])

 const fetchFoods = async()=>{
   const response = await axios.get("http://localhost:3001/foods")
   setFoods(response.data)
 }

 // useState her çalıştığında tüm kod render ediliyor. useeffect [] kullandığımızda artık her useState tetiklendiğine useeffect içindeki kod tetiklenmiyor. Sadece ilk seferinde çalışıyor sonraki re-renderlarda [] kullandığımız için çalışmıyor.

  // ediFoodById - değişen ve gönderline yeni isim id si ve title ile burdaki foods da değiştiriyoruz. foods u maple food.id gönderdiğim id eşitse. ...food u al yanına title:newTitle ekle.
  //new Title son eklenen olduğu için overwrites.
  // return {} bu işlemlerin hepsi bir object döndürmeli unutma

  const editFoodById = async (id, newTitle)=>{
    const response = await axios.put(`http://localhost:3001/foods/${id}`,{
      title: newTitle
    })
    
    const updatedFoods = foods.map((food)=>{
      if(food.id === id){
        return {...food, ...response.data}
      }
      return food
    })
   // food.id id ye eşit değilse direk if e girmeden return food yap dedik.
   setFoods(updatedFoods)
  }
  const deleteFoodById = async(id)=>{
    await axios.delete(`http://localhost:3001/foods/${id}`)
    const updatedFoods = foods.filter((food)=>{
      return food.id !== id
    })
    setFoods(updatedFoods)
  }
  
  const createFood= async (title)=>{
  // const updatedFood = [...foods, {id: crypto.randomUUID(), title:title}]
  // setFoods(updatedFood)

  //updateFood adında yeni bir arrray oluşturdum. içine daha önceki varsa foods un içini spread ile ekledik, + bir nesene ekle dedik. id verdik title verdik. 2. title value yani bizim yazdığımız buraya formdan inputa yazılarak gönderdiğimiz değer. setFoods ile foods u bu oluşturulan arraye eşitledik.

  // crypto.randomUUID() random id veriyor hazır yerleşik kod.

  //axios ile id vermeme gerek yok kendi veriyor title veriyoruz datamıza

   const response = await axios.post("http://localhost:3001/foods", {title:title})
   console.log(response.data);
   const updatedFoods = [...foods, response.data]
   setFoods(updatedFoods)

  }


 const valueToShare = {
    foods,
    fetchFoods,
    editFoodById,
    deleteFoodById,
    createFood
 }




 return(
    <FoodContext.Provider value={valueToShare}>
        {children}
    </FoodContext.Provider>
 )
}

export default FoodContext
export {Provider}

// import {Proivder}, Namık from ...

// default ları import ederken burda Namık FoodContext i import ediyor....
// default lu exportları import edilirken adı değişebilir.

// import {Proivder}, FoodContext from ...  ama gerek yok
 
