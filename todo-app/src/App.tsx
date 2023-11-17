import React, {useState } from 'react'
import './App.css'
import { TodoTypes } from './types/Todo'
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoLists"

const App:React.FC =()=>{
  const [todos,setTodos]=useState<TodoTypes[]>([])
  
  const addTodo=(text:string)=>{
    setTodos((prevTodos)=>{
   return [  ...prevTodos,{id:prevTodos.length+1,text,completed:false}]
    })
  }

  const toggleTodo=(id:number)=>{
    setTodos((prevTodos)=>
    prevTodos.map((todo)=>
    todo.id===id ?{...todo,completed:!todo.completed}:todo
    )
    )
  }

const deleteTodo = (id:number)=>{
setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!==id))
}

  return (
    <div className='App'>
     <h1>Todo App</h1>
     <AddTodo addTodo={addTodo}/>
     <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
