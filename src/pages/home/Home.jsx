import React, { useState } from "react";
import Books from "../../components/home/Books";
import ButtonAdd from "../../components/home/ButtonAdd";
import Pagination from "../../components/home/Pagination";
import useBooks from "../../hooks/useBooks";

const BookList = () => {
  const { books, loading } = useBooks();
  //paginate



  const [currentpage, setCurrentPage] = useState(1);
  const [booksperPage] = useState(4);
  const indexOfLastBook = currentpage * booksperPage;
  const indexOfFirstBook = indexOfLastBook - booksperPage;
  const currentBook = books.slice(indexOfFirstBook, indexOfLastBook);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <ButtonAdd/>
      <Books books={currentBook} loading={loading}/>

      <Pagination booksPerPage={booksperPage} totalBook={books.length} paginate={paginate} />
    </div>
  );
};

export default BookList;
