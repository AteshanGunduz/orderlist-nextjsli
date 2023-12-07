const Error = () => {
let title = "Engin"
const hadnleClick = ()=>{
    title = "Namık"
    console.log(title);
}
  return (
    <>
    <h2>{title}</h2>
    <button onClick={hadnleClick}>Başlığı Değiştir</button>
    </>
  )
}
export default Error

// Bu değişiklik consolda çalışsada ekranda çalışmıyor. title ekranda Namık olmuyor. çünkü atamayı görmüyor react. yeni object lazım sanıyorum.