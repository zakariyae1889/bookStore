import mongoose from "mongoose";
import slygfiy from 'slugify'
const BookSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required: true,
    },
    author:{
        type:String,
        required: true,
    },
    publishYear:{
        type:Number,
        required: true,
    },
    Slug : { 
        type: String, unique: true 

    },
},{ timestamps: true });
BookSchema.pre("save",async function(next){

   if(this.title && typeof this.title === "string"){
    this.Slug=slygfiy(this.title,{lower:true,strict:true});
    
   }
   else{
    return next(new Error("title is required  to generate slug "));
   }
   next();
 

});
BookSchema.pre('findOneAndUpdate',function(next){
    const update=this.getUpdate();
    if(update.title && typeof update.title === 'string'){
        update.Slug=slygfiy(update.title,{lower:true,strict:true});
    }
    next();

});



const Book=mongoose.model("Book",BookSchema);
export default Book;
