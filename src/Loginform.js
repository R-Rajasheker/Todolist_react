import React,{useState} from "react";

function Loginform(){
    const[formdata,setformdata]=useState({
        email:"",
        password:""
    });
    const[errors,seterrors]=useState();
    const[submitted,setsubmitted]=useState();
    
    function Handlechange(e){
        const{name,value}=e.target;
        setformdata(e.target.value);
    }
    function HandleSubmit(e){
        setformdata('');
      
    }
    return(
        <>
        <div>
            <h1>LOGIN</h1>
            <form>
               <h3><label>email  :<input type="text" value={formdata} onChange={Handlechange}></input></label></h3>
                <h3><label>password:<input type="text" value={formdata} onChange={Handlechange}></input></label></h3>
            </form>
            <button onClick={HandleSubmit}>login</button>
        </div>
        
        </>

    )
}
export default Loginform;