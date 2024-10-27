import React , { useState} from 'react'
import { Link } from "react-router-dom";
import  UseCreateBooks from "../../hooks/useCreateBooks"
const BookCreate = ()=> {
 
 
 
  const  {loading,create}= UseCreateBooks();
  const [inputs,setInputs]=useState({
    title:'',
    author:"",
    publishYear:""
       
  });
  const handelSubmit = async(e) =>{

    e.preventDefault();
    
    await create(inputs);

  }






  return (
    <>
       
      <div className='container w-50 mt-5 '>
        <div className='card d-flex justify-content-center aling-item-center'>
          <div className='card-header'>
           <Link to={'/'}>
            <i className="fa fa-arrow-left text-danger" aria-hidden="true"> home</i>
            
           </Link>
            
            <h3 className='text-primary text-center '>CreateNewBook</h3>
          </div>
          <div class="card-body">
            <form onSubmit={handelSubmit}>
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    value={inputs.title}
                    onChange={(e) =>setInputs({...inputs, title:e.target.value })} 
                   
                  />
                   
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">author</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    value={inputs.author}
                    onChange={(e) =>setInputs({...inputs, author:e.target.value })} 
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">year</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    id="exampleInputPassword1"
                    value={inputs.publishYear}
                    onChange={(e) =>setInputs({...inputs, publishYear:e.target.value })}  
                  />
              </div>
             
              <button type="submit" className="btn btn-outline-primary" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
 
        

     
     
    </>
  )
}
export default BookCreate
