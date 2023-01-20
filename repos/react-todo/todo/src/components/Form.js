import React, { useState } from 'react'
import styles from "../style.module.css"
import shortid from 'shortid'

export default function Form({todo, setTodo, todoList, setTodoList}) {
   
    const handleChange=(event)=>{
        setTodo(event.target.value);
       
        }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setTodoList([...todoList, {name:todo, id: shortid.generate() }])
        setTodo("")
        console.log(todoList)
         }
         
  return (
    <div>
        <form className={styles.todoForm} onSubmit={handleSubmit}>
            <input
             className={styles.todoInput} 
             value={todo} 
             onChange={handleChange}
             placeholder=''></input>
            <button className={styles.todoButton} type ='submit'>Add</button>
        </form>
    </div>
  )
}
