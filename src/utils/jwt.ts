import { Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const sign = (payload: JwtPayload) =>
  jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "30s",
  });

const Verifyer = (token: string, res: Response) => {
  return jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (err instanceof jwt.TokenExpiredError) {
      return res.json({
        message: "Expired token",
      });
    }

    if (err instanceof jwt.JsonWebTokenError) {
      return res.json({
        message: "Invalid token",
      });
    }
    return data;
  });
};

export default {
  sign,
  Verifyer,
};
