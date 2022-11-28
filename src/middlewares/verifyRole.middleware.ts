import { Request, Response, NextFunction } from "express";
import admins from "../model/admins.model";

export default (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const foundAdmin = admins.findOne({ username: username, password: password });

  console.log(foundAdmin);

  if (!foundAdmin) {
    return res.sendStatus(401);
  }

  // req.body.admin = foundAdmin;

  next();
};
