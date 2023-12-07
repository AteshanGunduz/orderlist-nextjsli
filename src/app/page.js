"use client"
import App from "@/components/App"
import Hook from "@/hooks/CustomHooks"

import { Provider } from "@/context/food"



// <FoodContext.Provider value={5}>  value 5 i aktardık app e.


const HomePage = () => {
  return (
    <Provider>
    <App/>
    </Provider>
  )
}
export default HomePage