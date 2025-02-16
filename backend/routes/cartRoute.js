import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/Auth.js";
const cartRouter = express.Router();

// we will manage the cart with the token of the user so we need a middleware to decode token
cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart);

export default cartRouter;