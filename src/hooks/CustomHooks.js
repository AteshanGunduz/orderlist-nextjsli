import { useState, useEffect } from "react"
import { useFect } from "./UseFetch"
// useFetch i ben oluşturdum.

const url = "https://api.escuelajs.co/api/v1/products"


const CustomHooks = () => {
  const {loading, products} = useFect(url)
  console.log(products);

  return (
    <div>
       <h2>hhh</h2>
    </div>
  )
}


export default CustomHooks