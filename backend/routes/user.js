const express=require("express");
const router=express.Router();
const z=require("zod");
const jwt=require("jsonwebtoken");
const {User, Account}=require("../db");
const { JWT_SECRET } = require("../config");
const {authMiddleware}=require("../middleware");
const signupBody=z.object({
    username:z.string().email(),
    password:z.string(),
    firstName:z.string(),
    lastName:z.string(),
})

//signup Route

router.post("/signup",async (req,res)=>{
    console.log(req.body);
    const {success}=signupBody.safeParse(req.body);
    console.log(success);
    if(!success){
        return res.status(411).json({
                message:"Email already taken / Incorrect inputs",
        })
    }
    const existingUser=await User.findOne({username:req.body.username});
    console.log(existingUser);
    if(existingUser){
        console.log(existingUser);
        return res.status(411).json({
            message:"Email already taken / Incorrect inputs",
        })
    }

    const user=await User.create({
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
    })
    
    const userId=user. _id;

    await Account.create({
        userId,
        balance:1+Math.random()*10000,
    })

    res.json({
        message:"User created successfully",
    })

})

const signinBody=z.object({
    username:z.string().email(),
    password:z.string(),
})


router.post("/signin",async (req,res)=>{
    const {success}=signinBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Error while logging in",
        })
    }

    const user=await User.findOne({
        username:req.body.username,
        password:req.body.password,
    })

    if(user){
        const token=jwt.sign({
            userId:user._id,
        },JWT_SECRET);

        return res.json({
            token:token
        })
    }

    res.status(411).json({
        message:"Error while logging in",
    })
})

const updateBody=z.object({
    password:z.string().optional(),
    firstName:z.string().optional(),
    lastName:z.string().optional(),
})

router.put("/",authMiddleware,async (req,res)=>{
    const {success}=updateBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Error while updating information",
        })
    }
    await User.updateOne({
        _id:req.userId
    },req.body)
    res.status(200).json({
        message:"Updated successfully",
    })
})

router.get("/bulk",async (req,res)=>{
    const filter = req.query.filter || "";

    const users=await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user:users.map(user=>({
            username:user.username,
            firstname:user.firstName,
            lastname:user.lastName,
            _id:user._id
        }))
    })
})


module.exports=router;