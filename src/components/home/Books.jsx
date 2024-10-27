import React from 'react'
import { Link } from "react-router-dom";
import Spinner from '../Spinner';

const Books = ({books,loading})=> {
  
  return (
    <>
      {loading ? (<Spinner/>) :
      (
        <>
          <h1 className="text-center mb-4">Book Store</h1>
          <table className="table table-striped table-hover align-middle bg-white">
              <thead className="bg-primary text-white">
                <tr>
                  
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Year</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                
                {books.length > 0 ? (
                  books.map((book) => (
                    <tr key={book._id}>
                    
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>
                        {book.publishYear}
                      </td>
                      <td>
                     
                        <Link to={`/details/${book.Slug}`} className="btn btn-link text-info me-md-2">
                          <i className="fa fa-info-circle" aria-hidden="true">Details </i> 
                        </Link>
                        <Link to={`/update/${book.Slug}`} className="btn btn-link text-warning me-md-2">
                          <i className="fa fa-pencil" aria-hidden="true">Edit</i> 
                        
                        </Link>
                        <Link to={`/delete/${book.Slug}`} className="btn btn-link text-danger me-md-2" >
                          <i className="fa fa-trash" aria-hidden="true"></i> Delete
                        </Link>

                       
                     
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No books found.
                    </td>
                  </tr>
                )}
              </tbody>
          </table>
        </>
       
      )}
      
      {/**/}
    
    
    
    </>
  )
}
export default Books
