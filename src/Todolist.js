import React from 'react'
import { useState } from 'react'

function Todolist(){
    const[todos,settodos]=useState([]);
    const[inputvalue,setinputvalues]=useState('');

function Handlechange(e){
 setinputvalues(e.target.value);
}

function HandleSubmit(e){
    e.preventDefault()
    if(inputvalue===""){
        return;
    }
settodos([...todos,inputvalue]);
setinputvalues('')
}

function Handledelete(index){
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    settodos(newTodos)
  
}

console.log(todos);
return(
    <>
    <div >
        <h1 style={{color:"red",fontFamily:"-moz-initial",fontSize:"100px"}}>Todolist</h1>
        <h2 style={{color:'blue'}}>Add Tasks</h2>
     <form>
        <input id='in1'  style={{fontSize:"20px"}} type='text' value={inputvalue} onChange={Handlechange}></input>
        <button id='b1' onClick={HandleSubmit} style={{fontSize:"20px"}}>Add</button>   
     </form>
     {/* <button onClick={HandleSubmit} style={{fontSize:"20px"}}>Add</button>    */}
    </div>
    <div className='clss2'>
    <ul>
    {todos.map((todo,index)=>(
        <li key={index}>
          {todo}
          <button onClick={()=>Handledelete(index)}>Delete</button>
        </li>
       
    ))}
    </ul>
    </div>
    </>
)
}
export default Todolist;