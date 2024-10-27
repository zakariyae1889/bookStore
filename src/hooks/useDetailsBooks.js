import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

const useDetailsBooks = () => {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState(null);
    const { slug } = useParams();
  
    const apiUrl = `http://localhost:3000/api/book/details/${slug}`;
    
   

    const detailsBookData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(apiUrl);
            setBooks(res.data);
            console.log(res.data)
        } catch (error) {
            console.log(error.response.data);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        detailsBookData();
    }, [slug]);

    return { books, loading };
};

export default useDetailsBooks;
