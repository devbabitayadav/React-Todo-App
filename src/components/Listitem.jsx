import React from 'react'
// import DeleteButton from './DeleteButton'
// import EditButton from './EditButton'

const Listitem = ({task , deleteTodo , editTodo}) => {
  return (
    <li className="list-group-item rounded-0 my-2 border-top"> 
 {task.text}
 
 <button className="btn btn-success btn-sm rounded-0 float-end" onClick={()=> deleteTodo(task.id)}>Delete</button>

 <button className="btn btn-warning btn-sm rounded-0 float-end" onClick={()=> editTodo(task)}>Edit</button>

    </li>
  )
}

export default Listitem
