import React from 'react'
import TodoItems from './TodoItems'
import { TodoTypes } from '../types/Todo'

interface Props {
    todos: TodoTypes[];
    toggleTodo:(id:number)=>void
    deleteTodo:(id:number)=>void
}

const TodoLists:React.FC<Props> = ({todos,toggleTodo,deleteTodo}) => {
  return (
    <div>
        {
            todos.map((todo) =>(<TodoItems key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />))
        }
    </div>
  )
}

export default TodoLists