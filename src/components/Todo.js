import React from 'react'
import { useState } from 'react'
import ListItem from './ListItem';
import './StyleSheet.css';

export default function Todo() {

    const[todo,setTodo] = useState("");
    const[todoList, setTodoList]=useState([]);

    const handleChange=(event)=>{
        setTodo(event.target.value);
        //console.log(todo)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        let tempList= todoList;
              tempList.push(todo);
        setTodoList(tempList);
        setTodo("");
        // console.log(tempList)
        
    }
  return (
    <div>
        <h3>Todo</h3>
        <form  onSubmit={handleSubmit}>
            <input onChange={handleChange}type="text" value={todo} />
            <button className='btn-submit' type="submit">Add</button>
        </form>
       
            {todoList.map((item)=>(
                <ListItem key={item} name={item}>List Item</ListItem>
            ))}

        

    </div>
  )
}
