import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";

const useDeleteBooks = () => {
    const [loading, setLoading] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate(); // لإعادة التوجيه بعد الحذف
    const apiUrl = `http://localhost:3000/api/book/delete/${slug}`;
    
    const deleteBook = async () => {
        try {
            setLoading(true);
            await axios.delete(apiUrl);
            toast.success("Book deleted successfully");
            navigate('/');
        } catch (error) { 
            toast.error(error.message);  
        } finally {
            setLoading(false);
        }
    };

    return { loading, deleteBook };
};

export default useDeleteBooks;
