import React from 'react'
import { TodoTypes } from '../types/Todo'

interface Props{
    todo:TodoTypes;
    toggleTodo:(id:number)=> void;
    deleteTodo:(id:number)=> void;
}
const TodoItems:React.FC<Props> = ({todo,toggleTodo,deleteTodo}) => {
  return (
    <div className='TodoItem'>
        <input type="checkbox" checked={todo.completed} onChange={()=>toggleTodo(todo.id)} />
        <span style={{textDecoration:todo.completed?"line-through":"none"}}>{
            todo.text
        }</span>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItems