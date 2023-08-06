import { Router } from "express";
import { createBooklist, getAllBookS,getAllBookSById, getAllBookSById1, getBestSeller, getUpdate,} from "./book.controller";

const router:Router=Router();

router.get("/allBooks",getAllBookS);
router.get("/allBooks/bestBook",getBestSeller);
router.put("/bestBook/:id",getUpdate);
router.get("/:genre",getAllBookSById);
router.get("/:genre/:publisher",getAllBookSById1);
router.post("/createBookList",createBooklist)

export default router;