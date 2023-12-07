import { useEffect, useRef } from "react"



const UseRefBasic = () => {
  const refContainer = useRef(null)
  const divContainer = useRef(null)
  const handleSubmit = (e)=>{
    e.preventDefault()

  }
  useEffect(()=>{
    console.log(refContainer.current);
  })
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" ref={refContainer}/>
            <button>Submit</button>
        </div>
    </form>
    <div ref={divContainer}>Hello World</div>
    </>
  )
}
export default UseRefBasic