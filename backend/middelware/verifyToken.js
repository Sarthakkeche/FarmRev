// middleware/verifyToken.js
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).json({ success: false, message: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // id, role
    next();
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid token" });
  }
};

export default verifyToken;
