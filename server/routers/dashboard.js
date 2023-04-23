
import { Router }  from "express";
import verifyToken from "../middleware/auth.js";


const router = Router()

router.get("/", verifyToken, (req, res)=>{
  res.status(200).json({
    success: true,
    message: 'Love Thu Forever'
  })
})


export default router

