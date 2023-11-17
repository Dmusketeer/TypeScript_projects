import React,{useState} from 'react'

interface Props{
    addTodo:(text:string)=>void
}

const AddTodo:React.FC<Props> = ({addTodo}) => {
    const [text,setText]=useState("")
    const handleAddTodo=()=>{
        if (text) {
            addTodo(text)
            console.log(text)
            setText("")
        }
    }
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default AddTodo