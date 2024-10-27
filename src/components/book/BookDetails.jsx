import React from "react";
import { Link } from "react-router-dom";
import useDetailsBooks from "../../hooks/useDetailsBooks";
import Spinner from '../Spinner';

const BookDetails = () => {
    const { books, loading } = useDetailsBooks();

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className="container w-50 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center text-info">Book Details</h3>
                            <Link to={'/'}>
                                <i className="fa fa-arrow-left text-danger" aria-hidden="true">Home</i>
                            </Link>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item text-center">
                                    <span className="text-success text-300">Title</span>
                                    <span className="p-3">:</span>
                                    <span className="p-3 text-danger">{books?.title }</span>
                                </li>
                                <li className="list-group-item text-center">
                                    <span className="text-success text-300">Author</span>
                                    <span className="p-3">:</span>
                                    <span className="p-3 text-danger">{books?.author || "N/A"}</span>
                                </li>
                                <li className="list-group-item text-center">
                                    <span className="text-success text-300">Year</span>
                                    <span className="p-3">:</span>
                                    <span className="p-3 text-danger">{books?.publishYear || "N/A"}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookDetails;
