import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const UseCreateBooks = () =>{
    const [loading,setLogding]=useState(false);
  
    const apiurl="http://localhost:3000/api/book/create/"
    const create = async(inputs)=>{
        const success = handleInputsErrors(inputs);
        if(!success) return;  //flase
        try{
            setLogding(true);
            await axios.post(apiurl,inputs);
            toast.success("book  created successfully");
           
          
          
        }catch (error){
            toast.error(error.message);
        }finally{
           setLogding(false);
        }
    }
    return {loading,create}
};
export default UseCreateBooks;

function handleInputsErrors({title,author,publishYear}){
    if(!title || !author || !publishYear){
        toast.error('Please fill in all fields');
        return false;
    }
    return true
}