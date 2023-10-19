import React, { useEffect, useState } from 'react'

const Form = ({saveTodo, edit, updateTodo}) => {


  const[text, setText]= useState(" ");


  // const[text, setText] = useState("initial value")
 const handleSubmit = (e) => {
    e.preventDefault();

if(text === ""){
  window.alert("please write something");
}
else{
    // saveTodo(text);
    if(edit.isEdit){
      updateTodo(edit.todo.id, text);
    }else{
      saveTodo(text);
    }
    setText("");
  
}
  };
//  console.log(edit)

useEffect(()=>{
  // console.log("component mounted");
  // setText("Update Mode")

 setText(edit.todo.text)

}, [edit]);



  return (
    <form onSubmit = {(e)=>handleSubmit(e)}>
       <input type="text" placeholder='Enter Text Here..' required className="form-control rounded-0 my-3" 
       onChange={(e)=>setText(e.target.value)}  
       value={text}
       />
       <button className="btn btn-primary rounded-0 my-2 w-100 fs-4">save</button>
     </form>
  )
}

export default Form
