import express, { Request, Response } from "express";
import fetchTodoRoute from "./routes/fetchTodoRoute";
import authTokenRoute from "./routes/authTokenRoute";

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use("/api", fetchTodoRoute);
app.use("/auth", authTokenRoute);

app.use("/", (_: Request, res: Response) => {
  const dummyJSON = {
    statusCode: -101010,
    data: {},
    metadata: {
      message: "Please contact to the Administrator.",
    },
  };
  res.status(200).json(dummyJSON);
});

export default app;
