import express from 'express'
import { addTocart,removecart , getcart } from '../Controllers/cartController.js'
import authMiddleware from '../Middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post("/adder",authMiddleware,addTocart)
cartRouter.post('/removed',authMiddleware,removecart)
cartRouter.post('/get',authMiddleware,getcart)


export default cartRouter; 