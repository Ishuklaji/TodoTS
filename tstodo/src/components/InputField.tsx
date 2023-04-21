import React from 'react'
import "./styles.css"

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({todo,setTodo}:Props) => {
    
  return (
    <form className="input">
     <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}placeholder="Enter a task" className="inputBox"/>
     <button className='inputSubmit' type ="submit">Go</button>
    </form>
  )
}

export default InputField