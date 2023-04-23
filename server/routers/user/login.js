import { Router } from "express";
import User from '../../models/Users.js'
import { verify } from "argon2";
import jwt from "jsonwebtoken";
import verifyToken from "../../middleware/auth.js";


const router = Router()
router.get("/",verifyToken ,( req, res )=>{
  res.send('Login')
})


router.post("/", async (req, res)=>{
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    //Wrong username
    if(!user){
      res
        .status(400)
        .json({
          success: false,
          message: "username or password isn't correct",
        })
    }


    //true
    const isVerity = await verify(user.password, password)
    if(isVerity){
      const token = jwt.sign(username, 'thu')
      res
        .status(200)
        .json({
          success: true,
          message: "Love Thu",
          authToken: token,
        })
    }


    //Wrong password
    res
      .status(400)
      .json({
        success: false,
        message: "username or password isn't correct",
      })
  } catch (error) {
    error.message
  }
})
export default router







