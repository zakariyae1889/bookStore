import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiurl = "http://localhost:3000/api/book/"

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${apiurl}`);
      setBooks(res.data);
      

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {books,loading};
};

export default useBooks;
