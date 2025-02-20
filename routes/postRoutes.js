import express, { Router } from 'express'
import { isAuth } from '../middleware/isAuth.js';
import { deletePost, getAllPost, newPost } from '../controllers/postController.js';
import uploadFile from '../middleware/multer.js';

const router =express.Router();

router.get("/all",isAuth,getAllPost)
router.post("/new",isAuth,uploadFile, newPost)
router.delete("/:id",isAuth,deletePost)

export default router