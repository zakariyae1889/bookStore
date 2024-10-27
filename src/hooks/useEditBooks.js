import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams} from "react-router-dom"

const useEditBooks = () => {
    const [loading, setLoading] = useState(false);
    const { slug } = useParams();
    
    const apiUrl = `http://localhost:3000/api/book/update/${slug}`;

    const update = async (inputs) => {
        const success = handleInputsErrors(inputs);
        if (!success) return;
        try {
            setLoading(true);
            await axios.put(apiUrl, inputs);
            toast.success("Book updated successfully");
           
        } catch (error) { 
            toast.error(error.message);  
        } finally {
            setLoading(false);
        }
    }

    return { loading, update };
}

export default useEditBooks;

function handleInputsErrors({ title, author, publishYear }) {
    if (!title || !author || !publishYear) {
        toast.error('Please fill in all fields');
        return false;
    }
    return true;
}
