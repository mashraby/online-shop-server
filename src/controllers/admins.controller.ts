import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import admins from "../model/admins.model";
import jwt from "../utils/jwt";

export default {
  GET: async (_: Request, res: Response) => {
    try {
      res.json(await admins.find());
    } catch (err) {
      throw new Error(err.message);
    }
  },
  POST: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      await admins.create({
        username,
        password: await bcrypt.hash(password, 6),
        role: "admin",
      });

      res.json({
        status: "OK",
        message: "Added new admin",
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  PUT: async (req: Request, res: Response) => {
    try {
    } catch (err) {
      throw new Error(err.message);
    }
  },
  DELETE: async (req: Request, res: Response) => {
    try {
    } catch (err) {
      throw new Error(err.message);
    }
  },
  LOGIN: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      const foundAdmin = await admins.findOne({
        username: username,
        password: password,
      });

      if (!foundAdmin) {
        res.sendStatus(401);
      }

      res.json({
        message: "Authorized",
        access_token: jwt.sign({
          username: foundAdmin.username,
          role: foundAdmin.role,
        }),
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
