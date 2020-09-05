import React from 'react'


const listItem =({todo,todos, setTodos})=>{

const handleRemoveTodo=()=>{
  //this filter will return all todos that
  //DO NOT MATCH
  //the seleted todo item's id property
setTodos(todos.filter((stateTodo)=>stateTodo.id !== todo.id))
}
const handleConfirmTodo=()=>{
  //map over every todo
  //check IF
  //the the current item === the selected todo's id
  //if true
  //return the todo with all its previous properties
  // using the ...todo (spread operator)
  //then change the property being manipulated
  //ELSE
  //return the item unchanged and continue the iteration
  //over the todo items
setTodos(todos.map((item)=>{
  if (item.id === todo.id) {
  return{
    ...item,
    completed: !item.completed,
  }
  }
  return item
}))

}
  return(
<div className="list-Item-Container">
    <li className={` todo-item ${todo.completed ? "done" : ""}`}>{todo.text} </li>
<span>

<button onClick={handleConfirmTodo}><i class="fa fa-check" aria-hidden="true"></i></button> <button onClick={handleRemoveTodo}><i class="fa fa-times" aria-hidden="true"></i>
</button>


</span>
</div>


  )
}



export default listItem;
