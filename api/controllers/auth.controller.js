import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt  from "jsonwebtoken";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User Created Successfully");
  } catch (error) {
        next(error);
  }
};

export const signin = async(req,res,next)=>{
    const{email,password} = req.body;
    try {
        const validateUserByEmail = await User.findOne({email});
        if(!validateUserByEmail) return next(errorHandler(404,"User not Found"));
        const validatePassword = bcryptjs.compareSync(password,validateUserByEmail.password);
        if(!validatePassword) return next(errorHandler(401,'Wrong credentials!'));
        const token = jwt.sign({id:validateUserByEmail._id},process.env.JWT_SECRET);
        const {password:pass,...rest}= validateUserByEmail._doc;
        res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)
    } catch (error) {
        next(error);
    }
}