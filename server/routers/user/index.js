import { Router } from "express";
import login from './login.js'
import register from './register.js'


const router = Router()


router.get("/", (req, res)=> {
  res.send(`User`)
})
router.use("/login", login)
router.use("/register", register)



export default router
