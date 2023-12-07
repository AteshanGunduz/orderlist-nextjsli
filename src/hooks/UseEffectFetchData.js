import { useEffect, useState } from "react"

//useEffect fetchlerde kullanılır.
// githubdan çektiğimiz api userlar var içinde
// use effectle çekicem usestate ile depolayıp rendlerliycem.

const url = "https://api.github.com/users"

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async ()=>{
    const response = await fetch(url)
    const gitusers = await response.json()
    setUsers(gitusers)
    console.log(users);
  }
  
  useEffect(()=>{
   getUsers()
  },[])

  // SONDAKİ bu boş array sürekli çalıştırmasını engelliyor. engellemezsek setuser re-render eder get user fetch eder fetch edip set users re-render eder. re-render edince getuser yine çalışır LOOP.

  return (
    <>
    <h3>Github Users</h3>
    <ul className="users">
        {users.map(user=>{
        const {id, login, avatar_url, html_url} = user
        return <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
               <h4>{login}</h4> 
               <a href={html_url}>Profile</a>
            </div>
            
        </li>
        })}
    </ul>
    </>
  )
}






export default UseEffectFetchData