import { Link } from "react-router-dom";
const ButtonAdd = () =>{
    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                <Link to={'/create'} className="btn btn-primary me-md-2" type="button">
                <i className="fa fa-plus-square" aria-hidden="true"></i> 
                Add Book
                </Link>
            </div>
        
        </>
    )
}
export default ButtonAdd;