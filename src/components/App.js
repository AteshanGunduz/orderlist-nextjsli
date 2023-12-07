import {useEffect, useContext } from "react"
import FoodCreate from "./FoodCreate"
import FoodList from "./FoodList"
import FoodContext from "@/context/food"


//  deleteFoodById -- foodShowdan gönderdiğim id yi foods içinde varsa diğerlerini çıkar. Filter ile sildiğimiz ürünü filter yöntmeiyle çıkartıyoruz foodun içinden. Sonra setFood ile food u yeni haliye güncelliyoruz.

const App = () => {
  const {fetchFoods} = useContext(FoodContext)

  useEffect(()=>{
    fetchFoods()
  },[])

  
  return (
    <div>
      <FoodCreate/> 
      <FoodList/>
    </div>
  )
}

// oncreate adıyla createdFood u gönderdim FoodCreate e !!!!
// FoodCreate bu gönderdipim createdFood yarattığı title ile çalıştırarak buraya geri yoldakı burasıda bu title le foods a nesneleri yükledi foods u da FoodListe gönderdim.

// foods ismiyle foods u gönderdim FoodList e  !!!!
 
//onDelete={deleteFoodById} liste gönderiyouz ordan da show a gönderecez orda çalıştırıp seçili id yi silmesi için kullanıcaz.
// tünel gibi burda fonksiyonu orda çalıştırıcaz.

// oluşturduğumuz editFoodById function ınında onEdit ismiyle foodedit e kadar gönderiyoruz tek tek. orda çalışıtıryoruz burdan editliyor function.

export default App