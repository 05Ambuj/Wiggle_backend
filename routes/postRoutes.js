import express, { Router } from 'express'
import { isAuth } from '../middleware/isAuth.js';
import { deletePost, getAllPost, newPost ,likeUnlikePost,commentonPost,deleteComment} from '../controllers/postController.js';
import uploadFile from '../middleware/multer.js';

const router =express.Router();

router.get("/all",isAuth,getAllPost)
router.post("/new",isAuth,uploadFile, newPost)
router.post("/like/:id", isAuth, likeUnlikePost);
router.post("/comment/:id", isAuth, commentonPost);
router.delete("/comment/:id", isAuth, deleteComment);
router.delete("/:id",isAuth,deletePost)

export default router