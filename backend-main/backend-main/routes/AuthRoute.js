import express from "express";
import {Login, logOut, Me} from "../controllers/Auth.js";
import { createUser } from "../controllers/Users.js";

const router = express.Router();

router.get('/me', Me);
router.post('/login', Login);
router.delete('/logout', logOut);
router.post('/register', createUser);

export default router;