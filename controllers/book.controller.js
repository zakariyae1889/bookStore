import Book from "../models/book.model.js";
//create
export const BookCreate =  async (req, res) => {
    const { title, author, publishYear } = req.body;

    try {
  
        if (!title || !author || !publishYear) {
            throw new Error("All fields are required.");
        }

       
        const book = await Book.findOne({ title });
        if (book) {
            return res.status(400).json({ success: false, message: "Book already exists" });
        }

        
        const newBook = new Book({
            title,
            author,
            publishYear,
            
        });

        
        await newBook.save();

        return res.status(201).json({ success: true, message: "Book created successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, message: error.message });
    }
};
// Show Book
export const BookRaid   =    async (req,res)=>{

    try
    {
        const book = await Book.find();
        return res.status(201).send(book);

    }catch(error){
        console.log(error.message);
        return res.status(500).send({message:error.message});
      
    }

}
//update
export const BookUpdate =  async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;
        const { slug } = req.params;

        
        if (!title || !author || !publishYear) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const book = await Book.findOneAndUpdate(
            { Slug: slug }, 
            { title, author, publishYear }, 
            { new: true } 
        );

       
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json({ message: "Book updated successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};
// delete
export const BookDelete =  async (req,res)=>{
    try
    {
      
        const {slug}=req.params;


        
       
        
        const book = await Book.findOneAndDelete({Slug:slug});
       
        if(!book){
            return res.status(201).json({message:"Book not found"});
        }
     
        return res.status(201).send({message:"book delete successfully"});

    }catch(error){
        console.log(error.message);
        return res.status(500).send({message:error.message});
      
    }
}
// details  Book
export const BookDetails = async (req, res) => {
    try {
        const { slug } = req.params;
        const book = await Book.findOne({Slug: slug });
        if (!book) {
            return res.status(400).json({ success: false, message: "Book not found" });
        }
        return res.status(200).json(book); // إرجاع الكتاب مباشرةً
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};
