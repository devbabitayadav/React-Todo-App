// import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup  from './components/ListGroup'
import Footer from './components/Footer'
import { useState } from 'react'


const App = () => {

  //  let version = 1;
  // let name = "Todo App"

  // let tasks = ["code" , "sleep" , "eat" , "repeat"];
const [tasks, setTasks ] = useState([]);

const [edit, setEdit] = useState({
  todo:{},
  isEDIT: false,
});

  // (state is immutiable)
//  syntax- const [state,setState]=useState(initialValue)

const[version, setVersion] = useState(0) 

const handleCLICK=()=>{
console.log("button clicked")
setVersion (version+1);

};
const handleDecrease=()=>{
  console.log("button clicked")
    if (version > 0) {
      setVersion (version-1);
    }
 
  
  };

  const [name, setName]= useState("Ulitimate Todo-APP")

  const changeName=()=>{
    setName("SuperApp");
  }
  const deleteTodo = (id)=>{
    console.log(id);
    setTasks(tasks.filter(
      task=>{
        if(task.id!==id)
        return true;
      }
    ));
  };
 const saveTodo = (text)=>{
  // console.log(text);
  const newTodo ={
    id:crypto.randomUUID(),
    text:text
  };
  console.log(newTodo)
  setTasks([newTodo, ...tasks]);
 };
const editTodo= (todo)=>{
  setEdit({
    todo:todo,
    isEdit: true,
  });
};

const updateTodo = (id, text)=>{
//   // console.log(id, text)
//   setTasks(
//     tasks.map((task) => {
// if(task.id === id){
//   return{
//   ...task,
//     text:text,
//   };
// }else{
//   return task;
// }
//   })
//   );

// ...task="spread operator"

setTasks(tasks.map((task)=>task.id===id?{...task , text:text}:task)
);
setEdit({todo:{}, isEdit:false});
};



  return (
<>  

 <Navbar version={version} name={name} changeName={changeName}/>
   <div className='container p-5'>
    
   
   <Form saveTodo = {saveTodo} edit = {edit} updateTodo={updateTodo}/> 
  <ListGroup tasks={tasks} deleteTodo={deleteTodo} editTodo={editTodo}/>
    <button className='btn btn-success rounded-0 text-light my-2 fs-4 w-100' onClick={()=>handleCLICK()}>Increase</button>
    <button className='btn btn-primary my-2 rounded-0 text-light fs-4 w-100' onClick={()=>handleDecrease()}>Decrease</button>
  <Footer name={name}/>
   </div>
    
     </>
  
  )
}

export default App
