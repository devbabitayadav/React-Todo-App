import React from 'react'
import Listitem from './Listitem'

const ListGroup = ({tasks , deleteTodo, editTodo}) => {
  if(!tasks || tasks.length === 0){
    return<h3 className='my-3 text-center'>No Todos Here.. </h3>;
  }
  return (
    <ul className="list-group my-2 mt-2">
    {/* <Listitem task={tasks[0]}/>
    <Listitem task={tasks[1]}/>
    <Listitem task={tasks[2]}/>
    <Listitem task={tasks[3]}/> */
    tasks.map((task, index)=>
    <Listitem key={index} task={task} deleteTodo={deleteTodo} editTodo={editTodo}/>
    )

    }



  </ul>
  )
}

export default ListGroup
