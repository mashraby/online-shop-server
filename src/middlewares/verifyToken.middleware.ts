import { Request, Response, NextFunction } from "express";
import { IncomingHttpHeaders } from "http";
import Verifyer from "./../utils/jwt";

interface CustomRequest extends Request {
  headers: IncomingHttpHeaders & {
    access_token?: string;
  };
}

export const verifyToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const access_token = req.headers.access_token;

  if (!access_token) {
    res.json({
      message: "Token is not available",
    });
  }

  const admin = Verifyer.Verifyer(access_token, res);
  req.body.admin = admin;
  next();
};
