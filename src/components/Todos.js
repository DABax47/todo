import React from 'react'
import ListItem from './ListItem.js'
const Todos = ({todos, setTodos,filteredTodos})=>{
  return(
    <div className="todos-Container">
    <ul>
  {
  filteredTodos.map(todo=>{
    return(  <ListItem todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />)

  }

  )
  }

    </ul>

    </div>

  )
}

export default Todos;
