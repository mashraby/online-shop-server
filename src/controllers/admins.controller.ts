import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import admins from "../model/admins.model";
import AdminModel from "../model/admins.model";

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

      const newAdmin = new AdminModel({
        username: username,
        password: await bcrypt.hash(password, 6),
        role: "superadmin",
      });

      let error = newAdmin.validateSync();

      if (error) {
        if (error.errors["status"]) {
          return res.send(error.errors["status"].message);
        }
      }

      await newAdmin.save();

      res.json({
        status: 200,
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
