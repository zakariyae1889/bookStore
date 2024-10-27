import React from 'react';
import useDeleteBooks from '../../hooks/useDeleteBooks';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';

const BookDelete = () => {
    const { loading, deleteBook } = useDeleteBooks();

    const handleDeleteBook = async () => {
        await deleteBook();
    };

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className='container w-75  mt-5 justify-content-center aling-item-center'>
                    <div class="card text-center">
                        <div class="card-header">
                            <div className='d-flex justify-content-start'>
                            <Link to={'/'}>
                            <i className="fa fa-arrow-left text-danger" aria-hidden="true">home</i>
                            </Link>

                            </div>
                      
                        DeleteBook
                        </div>
                        <div class="card-body">
                        
                        <p class="card-text">Are you sure to delete this</p>
                        <button className='btn btn-danger' onClick={handleDeleteBook}>Delete</button>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

export default BookDelete;
