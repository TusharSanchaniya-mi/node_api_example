// authMiddleware.js
import { NextFunction, Request, Response } from "express";
import jwt, { Jwt, JwtPayload, VerifyErrors } from "jsonwebtoken";
import {
  APIResponse,
  EmptyData,
  StatusMessage,
} from "../model/serviceModel/services";

const SECRET_KEY = "super_secret_key"; // store in env

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader =
    req.headers["authorization"] ?? req.headers["Authorization"] ?? null;
  const token =
    authHeader && typeof authHeader == "string" && authHeader.split(" ")[1]; // Get token after "Bearer"

  if (!token && typeof token == "string") {
    const response: APIResponse<EmptyData> = {
      statusCode: 401,
      data: {},
      metadata: {
        message: "Authorization token is missing, please check the header.",
        requestData: JSON.stringify(req.headers),
        accessToken: token,
      },
      statusMessage: StatusMessage.FAILED,
    };
    return res.status(401).json(response);
  }
  if (!token && typeof token == "string") {
    jwt.verify(
      token,
      SECRET_KEY,
      (
        err: VerifyErrors | null,
        decoded: Jwt | JwtPayload | string | undefined
      ) => {
        if (err) {
          const responseError: APIResponse<EmptyData> = {
            statusCode: 403,
            data: {},
            metadata: {
              message: `The token is either invalid or has expired.}`,
              requestData: JSON.stringify(req.headers),
              accessToken: token,
            },
            statusMessage: StatusMessage.SUCCESS,
          };
          return res.status(403).json(responseError);
        }

        console.log("decoded: ", JSON.stringify(decoded, null, " "));
        (req as any).user = decoded; // Attach decoded payload to request
        next();
      }
    );
  }
};
