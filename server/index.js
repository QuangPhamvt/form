import Express  from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import mongoose  from "mongoose";
import user from "./routers/user/index.js";
import dashboard from "./routers/dashboard.js"
import verifyToken from "./middleware/auth.js";


const mongoDB = async ()=> {
  try {
    await mongoose.connect(`mongodb://localhost:27017/test`)
    console.log(`connection mongoDB`);
  } catch (e) {
    console.log(e.message);
  }
}
mongoDB()
const PORT = 3000;
const app = Express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



//Router
app.use("/user", user)
app.use("/dashboard",verifyToken, dashboard)

app.listen(PORT, ()=>{
  console.log(`Server is listening ${PORT}`);
}, )


