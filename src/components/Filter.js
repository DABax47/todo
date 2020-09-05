import React from 'react'


const Filter=({setFilterStatus})=>{
const handleFilter=(e)=>{
  setFilterStatus(e.target.value)
}
  return(
    <div className="filter">
    <select onChange={handleFilter} name="" id="">
    <option value="all">All</option>
    <option value="uncompleted">Uncompleted</option>
    <option value="completed">Completed</option>
    </select>
      </div>
  )
}


export default Filter
