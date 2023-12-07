import { useState, useEffect } from "react";


export const useFect = (url) =>{
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
  
    const getProducts = async()=>{
      const response = await fetch(url)
      const products = response.json()
      setProducts(products)
      setLoading(false)
    }
    console.log(products);
  
    useEffect(()=>{
      getProducts()
    },[url])

    return {loading, products}
}