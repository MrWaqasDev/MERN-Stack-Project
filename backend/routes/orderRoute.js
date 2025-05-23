import express from 'express'
import  {updateStatus,userOrders,allOrders,placeOrder,placeOrderRazorpay,placeOrderStripe, verifyStripe} from '../controllers/OrderController.js'
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';


const orderRouter = express.Router();

//Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)
orderRouter.post('/stripe',authUser,placeOrderStripe)


//User Features
orderRouter.post('/userOrders',authUser,userOrders)

//Verfiy Payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter;