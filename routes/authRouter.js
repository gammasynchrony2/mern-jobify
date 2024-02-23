import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import { validateRegisterInput, validateLoginInput } from "../middleware/validationMiddleware.js";
import rateLimiter from 'express-rate-limit';

export const router = Router();

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 15,
    message: {msg: 'IP rate limit exceeded, retry in 15 minutes'}
})

router.post('/register', apiLimiter, validateRegisterInput, register);
router.post('/login', apiLimiter, validateLoginInput, login);
router.get('/logout', logout);