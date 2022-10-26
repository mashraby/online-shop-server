import { Request, Response } from "express";
import moment from "moment";
import categories from "../model/categories.model";

export default {
  GET: async (_: Request, res: Response) => {
    try {
      const allCategory = await categories.find();

      for (let i = 0; i < allCategory.length; i++) {
        const element = allCategory[i] as any;

        return moment(element.created_at).format("MMMM Do YYYY, h:mm:ss a");
      }

      // console.log(allCategory);

      res.json(
        await categories.find().populate({
          path: "products",
          select: `_id name price imgs description}`,
        })
      );
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
