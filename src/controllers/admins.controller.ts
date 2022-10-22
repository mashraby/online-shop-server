import { Request, Response } from "express";
import admins from "../model/admins.model";

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

      await admins.create({ username, password, role: "admin" });

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
};
