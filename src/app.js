const express = require("express");
const fetchTodoRoute = require("./routes/fetchTodoRoute");

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use("/api", fetchTodoRoute);

app.use("/", (_, res) => {
  const dummyJSON = {
    statusCode: -101010,
    data: {},
    metadata: {
      message: "Please contact to the Administrator.",
    },
  };
  res.status(200).json(dummyJSON);
});

module.exports = app;
