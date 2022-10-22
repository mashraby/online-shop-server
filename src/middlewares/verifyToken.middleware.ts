import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
  const { access_token } = req.headers;

  // if (!access_token) {
  //   return res.redirect("/");
  // }

  // jwt.verify(access_token, process.env.SECRET_KEY, (err, decode) => {
  //   if (err instanceof jwt.TokenExpiredError) {
  //     return res.redirect("/");
  //   }

  //   if (err instanceof jwt.JsonWebTokenError) {
  //     return res.redirect("/");
  //   }

  //   req.data = decode;

  //   next();
  // });
};
