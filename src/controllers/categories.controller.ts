import { Request, Response } from "express";
import categories from "../model/categories.model";

export default {
  GET: async (req: Request, res: Response) => {
    try {
      res.json(await categories.find());
    } catch (err) {
      throw new Error(err.message);
    }
  },
  POST: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;

      await categories.create({ name });

      res.json({
        status: "OK",
        message: "Category added",
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  PUT: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      await categories.findByIdAndUpdate(id, { name });

      res.json({
        status: "OK",
        message: "The category has been changed",
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  DELETE: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await categories.findByIdAndDelete(id);

      res.json({
        status: "OK",
        message: "The category has been removed",
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
