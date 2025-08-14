// authMiddleware.js
const jwt = require("jsonwebtoken");

const SECRET_KEY = "super_secret_key"; // store in env

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Get token after "Bearer"

  if (!token) {
    return res.status(401).json({ error: "Authorization token is missing." });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ error: "The token is either invalid or has expired." });
    }

    req.user = decoded; // Attach decoded payload to request
    next();
  });
};

module.exports = { authenticateToken };
