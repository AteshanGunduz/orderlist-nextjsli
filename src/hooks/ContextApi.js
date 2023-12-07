import React, { useState, useContext } from 'react'

const data = [
  { id: 1, name: 'murat' },
  { id: 2, name: 'namık' },
  { id: 3, name: 'suzan' },
  { id: 4, name: 'eda' },
]

const PersonContext = React.createContext()
// İki bileşen: Provider & Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3> ContextAPI / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const mainData = useContext(PersonContext)
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)
  // console.log(data)
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Kaldır</button>
    </div>
  )
}

export default ContextAPI
