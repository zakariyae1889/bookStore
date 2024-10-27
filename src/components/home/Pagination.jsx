const Pagination =({booksPerPage,totalBook,paginate})=>{
   const PageNumber=[];
   for(let i=1; i < Math.ceil(totalBook/booksPerPage);i++)
   {
      PageNumber.push(i);
   }
   return(
      <>
         <nav className="mt-4">
            <ul class="pagination justify-content-center">
               {PageNumber.map(number=>(
                  <li key={number} class="page-item">
                     <a class="page-link" onClick={()=>paginate(number)}>
                     {number}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
      </>
   )
}
export default Pagination;