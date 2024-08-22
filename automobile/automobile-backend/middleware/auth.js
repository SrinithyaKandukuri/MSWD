const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({
      message: "No token provided!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized!",
    });
  }
  return next();
};

module.exports = verifyToken;
