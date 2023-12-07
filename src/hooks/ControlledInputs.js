import { useState } from "react"




const ControlledInputs = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [age, setAge] = useState("")

  const [person, setPerson] = useState({name:"", email:"", age:""})
  const [people, setPeople] = useState([])

//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     if(name && email){
//         const person = {name: name, email: email, id:crypto.randomUUID()}
//         setPeople((people)=>{
//             return [...people, person]
//         })
//         setName("")
//         setEmail("")
//     } else {
//         console.log("boş");
//     }
//   }

//Birçok inputla uğraştığımızda bu aşağıdaki gibi input name i alıyoruz. [name] vererekde  dinamik olarak hangi inputa tıklarsam ona erişiyorum.

const handleChange = (e)=>{
 const name = e.target.name
 const value = e.target.value
 setPerson({...person, [name]:value})
}

const handleSubmit = (e)=>{
    e.preventDefault()
    if(person.name && person.email && person.age){
        const newPerson = {...person, id:crypto.randomUUID()}
        setPeople([...people, newPerson])
    }
    setPerson({name:"",email:"",age:""})
}

  return (
    <>
    <article>
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name"value={person.name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={person.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={person.age} onChange={handleChange}/>
            </div>
            <button onClick={handleSubmit}>Add person</button>
        </form>
        {people.map((person)=>{
          const {name, email, id, age} = person
          return <div key={id}>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{age}</p>
          </div>
        })}
    </article>
    </>
  )
}
export default ControlledInputs