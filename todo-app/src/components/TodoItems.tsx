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
        <input type="checkbox"  style={{ transform: 'scale(1.5)' }} checked={todo.completed} onChange={()=>toggleTodo(todo.id)} />
        <span className='TodoItemText' style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none',
        fontSize: '26px',
        color: todo.completed ? '#888' : '#333',
        fontFamily: 'Arial, sans-serif',
        fontWeight: todo.completed ? 'normal' : 'bold',  
    }}>{
            todo.text
        }</span>
        <button className='TodoItemButton' onClick={()=>deleteTodo(todo.id)}>DELETE</button>
    </div>
  )
}

export default TodoItems