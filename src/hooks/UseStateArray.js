import { useState } from "react"

const poepleData = [
    {id:1, name:"Murat"},
    {id:2, name:"Namık"},
    {id:3, name:"Suzan"},
    {id:4, name:"Eda"},
]


const UseStateArray = () => {
  const [people, setPeople] = useState(poepleData)
  // Aşğıdaki function return altındaki const {id, name} = person destructrue ın oluşturduğu id yi kullanıyor.  const {id, name} = person
  // setPeople() useState hazır function ı sayesinde içindekine çeviriyor.
  // poeple datamıza eşit onu filterlıyoruz. person.id ler aşağıdaki maplerdekenki id ile karşılaştırıldığında. (eşit değil ise !==) eşit olmayanları alıyor. Yani tıklandığında tıklanan id ile eşit olmayanları alan bir filter.
  const removePerson = (id)=>{
    let newPerson = people.filter(person=> person.id !== id )
    setPeople(newPerson)
  }
  return (
    <>
    {people.map((person)=>{
        const {id, name} = person
        return (
        <div key={id}>
          <h1>{name}</h1>
          <button onClick={()=>removePerson(id)}>Kaldır</button>
        </div>
        )
    })}
    <button onClick={()=>setPeople([])}>Silen Button</button>
    </>
  ) 
  // ()=>setPeople([]) onClick içinde çapırmank için fonksiyonu arrow ile buraya sıkıştırdık. Burda çağırmadık yoksa tıklanmadan çalışıyor.
  // ()=>setPeople([]) burdada peopleDataya değiştirecek olan bu fonsksiyon ile için boş array [] yapıyoruz.Buttona tıklandığında siliyor.
}
export default UseStateArray