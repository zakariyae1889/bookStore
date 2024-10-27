import  express from "express";
import { BookCreate,BookRaid,BookUpdate,BookDelete,BookDetails } from "../controllers/book.controller.js";

const router=express.Router();
router.get('/',BookRaid);
router.get('/details/:slug',BookDetails);
router.post('/create/',BookCreate);
router.put("/update/:slug",BookUpdate);
router.delete("/delete/:slug",BookDelete);





export default router;