import jwt from 'jsonwebtoken'




const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization')
  const token = authHeader && authHeader.split(' ')[1]
  if(!token) return res.status(400).json({
    success: false,
    message: `Please login`
  })

  try {
    const decoded = jwt.verify(token, 'thu')
    console.log(decoded);
    next()
  } catch (error) {
    console.log(error.message);
    res.json(`wrong`)
  }
}


export default verifyToken
