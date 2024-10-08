import express from 'express'
import authMiddleware from '../Middleware/auth.js'
import { placeOrder ,verifyorder, userOrder , listOrder  , updatestatus} from '../Controllers/orderController.js'



const orderRouter = express.Router();


orderRouter.post ("/place", authMiddleware,placeOrder);
orderRouter.post ("/verify", verifyorder);
orderRouter.post("/userorder",authMiddleware,userOrder)
orderRouter.get("/list" , listOrder)
orderRouter.post("/status",updatestatus)




export default orderRouter;