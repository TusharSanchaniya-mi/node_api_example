const jwt = require("jsonwebtoken");

const getAuthToken = (req, res) => {
  const { username, password } = req.body;

  // ✅ Check username/password in DB here
  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ username }, "super_secret_key", {
      expiresIn: "1h",
    });
    return res.json({ token }); // send to client
  }

  res.status(401).json({ error: "Invalid credentials" });
};

module.exports = { getAuthToken };
