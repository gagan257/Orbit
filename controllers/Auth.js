const bcrypt = require("bcrypt");
const User =  require("../models/User");
const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.signup = async (req, res) =>{
    try{
        const {name, email, password, role} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({
            success:false,
            message:"User alresdy exists"
        });
    }
    let handlePassword ;
    // handlePassword = await bcrypt.hash(password,10);
    try{
        handlePassword = await bcrypt.hash(password,10);
    }
    catch(err){
        return res.status(500).json({
            success:"false",
            message:"Error in hashing password"
        });
    }

    const user = await User.create({
        name,email,password:handlePassword,role
    })
    return res.status(200).json({
        success:true,
        message:"User created successfully"
    });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"User creation failed"
        });
    }
}

exports.login = async (req,res) => {
    try{

        const {email , password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'Please fill all the details carefully'
            });
        }
        let user = await User.findOne({email});

        if(!user){
            return res.status(402).json({
                success:false,
                message:'User is not registered'
            });
        }
        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        }
        console.log(payload);

        if(await bcrypt.compare(password, user.password)){
            let token = jwt.sign(payload, process.env.JWT_SECRET,{
                expiresIn:"3h"
            } );


            user = user.toObject();
            user.token = token;
            user.password = undefined;


            const options = {
                expires:new Date(Date.now() + 3 * 24 * 24 * 60 * 60 * 1000),
                httpOnly:true
            }

            res.cookie("krishna",token, options).status(200).json({
                success:true,
                token,
                user,
                message:"User logged in successfully"
            });

        }
        else{
            return res.status(403).json({
                success:false,
                message:'Incorrect Password'
            });

        }

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'Login failed'
        });

    }
}