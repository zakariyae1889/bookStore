import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useEditBooks from "../../hooks/useEditBooks"


const BookEdit = () => {
  const { loading, update } = useEditBooks();
  const [inputs, setInputs] = useState({
    title: '',
    author: '',
    publishYear: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update(inputs); // تمرير inputs إلى الدالة update
  }

  return (
    <>
      <div className='container w-50 mt-5 '>
        <div className='card '>
          <div className='card-header'>
            <Link to={'/'}>
              <i className="fa fa-arrow-left text-danger" aria-hidden="true"> home</i>
            </Link>
            <h3 className='text-primary text-center '>Edit Book</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="title"
                  value={inputs.title}
                  onChange={(e) => setInputs({ ...inputs, title: e.target.value })} 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="author"
                  value={inputs.author}
                  onChange={(e) => setInputs({ ...inputs, author: e.target.value })} 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="publishYear" className="form-label">Year</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="publishYear"
                  value={inputs.publishYear}
                  onChange={(e) => setInputs({ ...inputs, publishYear: e.target.value })}  
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
  );
}

export default BookEdit;
