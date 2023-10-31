
const jwt  = require("jsonwebtoken");
require("dotenv").config();


exports.auth = (req, res, next)=>{
    try{
        const token = req.body.token;

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Token missing"
        });
    }
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;
    }catch(error){
        return res.status(402).json({
            success:false,
            message:"invalid token",
        });
    }
    next();

    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"something went wrong"
        });
    }
}

exports.isStudent = (req, res,next) =>{
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"this is protected route for students",
            })
        }
        next();

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"user role not matching",
        })
    }
}

exports.isAdmin = (req, res,next) =>{
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"this is protected route for Admins",
            })
        }
        next();

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"user role not matching",
        })
    }
}