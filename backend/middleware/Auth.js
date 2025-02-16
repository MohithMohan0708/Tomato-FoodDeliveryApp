import jwt from "jsonwebtoken"

const authMiddleware = async(req,res,next) => {
    // we will take the token from req headers
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,message:"Not Authorized Login Again"})
    } 
    try {
        // we have created token with the help of userId so decode to get userId
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next(); 
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export default authMiddleware;