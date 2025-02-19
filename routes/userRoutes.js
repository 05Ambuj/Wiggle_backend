import express from 'express'
import { isAuth } from '../middleware/isAuth.js';
import { myProfile, userProfile } from '../controllers/userController.js';

const router =express.Router();

router.get("/myprofile",isAuth,myProfile);
router.get("/:id",isAuth, userProfile);
 
export default router;