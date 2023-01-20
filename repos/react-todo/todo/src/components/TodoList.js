import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList, setTodoList}) {
  
  return (
    <div>{
        todoList.map((todoItem)=>(
            <Todo  key={todoItem.id}
             todoItem={todoItem}
             todoList={todoList}
             setTodoList={setTodoList}
            ></Todo>
    ))}</div>
  )
}
