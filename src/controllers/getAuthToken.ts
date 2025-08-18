import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import {
  APIResponse,
  EmptyData,
  StatusMessage,
} from "../model/serviceModel/services";

export const getAuthToken = (req: Request, res: Response) => {
  const { username, password } = req.body;

  // ✅ Check username/password in DB here
  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ username }, "super_secret_key", {
      expiresIn: "1h",
    });

    const response: APIResponse<EmptyData> = {
      statusCode: 200,
      data: {},
      metadata: {
        message: "Data Retrieve successfully",
        accessToken: token,
      },
      statusMessage: StatusMessage.SUCCESS,
    };

    return res.json(response);
  }

  const responseError: APIResponse<EmptyData> = {
    statusCode: 401,
    data: {},
    metadata: {
      message: "Invalid credentials",
      accessToken: null,
    },
    statusMessage: StatusMessage.FAILED,
  };

  res.status(401).json(responseError);
};
