import { useEffect, useState } from "react"

const url = "https://api.github.com/users/kevinclark"

const MultibleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState("defaulth user")

  useEffect(()=>{
    fetch(url).then((res)=> {
    if(res.status >= 200 && res.status <=299){
        return res.json()
    } else {
        setIsLoading(false)
        setIsError(true)
    }
    }).then((user)=>{
    const {login} = user
    setUser(login)
    setIsLoading(false)
    }).catch((err)=>console.log(err))
  },[])

  if(isLoading){
    return(
    <div>
    <h2>Loading...</h2>
    </div>
    )
  }

  if(isError){
    return (
    <div>
    <h2>Error</h2>
    </div>
    )
  }


  return (
    <div>{user}</div>
  )
}
export default MultibleReturns