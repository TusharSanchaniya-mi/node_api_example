const jwt = require("jsonwebtoken");

const getAuthToken = (req, res) => {
  const { username, password } = req.body;

  // ✅ Check username/password in DB here
  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ username }, "super_secret_key", {
      expiresIn: "1h",
    });

    const response = {
      statusCode: 200,
      data: {},
      metadata: {
        message: "Data Retrieve successfully",
        accessToken: token,
      },
    };

    return res.json(response); // send to client
  }

  const responseError = {
    statusCode: 401,
    data: {},
    metadata: {
      message: "Invalid credentials",
    },
  };

  res.status(401).json(responseError);
};

module.exports = { getAuthToken };
