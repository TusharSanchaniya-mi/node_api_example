// authMiddleware.js
const jwt = require("jsonwebtoken");

const SECRET_KEY = "super_secret_key"; // store in env

function removeCircularReferences(key, value) {
  if (value === obj) return undefined; // Skip the circular reference
  return value;
}

const authenticateToken = (req, res, next) => {
  const authHeader =
    req.headers["authorization"] ?? req.headers["Authorization"] ?? null;
  const token = authHeader && authHeader.split(" ")[1]; // Get token after "Bearer"

  const response = {
    statusCode: 401,
    data: {},
    metadata: {
      message: "Authorization token is missing, please check the header.",
      requestData: JSON.stringify(req.headers),
    },
  };

  if (!token) {
    return res.status(401).json(response);
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      const responseError = {
        statusCode: 403,
        data: {},
        metadata: {
          message: `The token is either invalid or has expired :: [Error] ${err}`,
          requestData: JSON.stringify(req.headers),
        },
      };
      return res.status(403).json(responseError);
    }

    req.user = decoded; // Attach decoded payload to request
    next();
  });
};

module.exports = { authenticateToken };
