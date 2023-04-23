import argon2 from "argon2";
import jwt from "jsonwebtoken"
import { Router } from "express";
import User from "../../models/Users.js";
const router = Router() 



router.get("/", (req, res)=> {
  res.send(`Register`)
})




router.post("/", async (req, res)=>{
  try {
    const { username, password } = req.body

    //check username
    const isUsernameExist = await User.findOne({ username })
    if(isUsernameExist)
      return res
        .status(400)
        .json({
          success: false,
          messgae: "Exist the username!"
        })

    //create user
    const hashedPassword = await argon2.hash(password)
    const user = new User({
      username,
      password : hashedPassword,
    })
    await user.save()
    const authToken = jwt.sign(username, 'thu')
    res
      .status(200)
      .json({
        success: true,
        message: "Done! forever love Thu",
        authToken,
      })
  } catch (error) {
    error.message
  }
})

export default router
