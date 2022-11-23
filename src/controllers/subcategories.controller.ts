import { Request, Response } from "express";
import sub_catebories from "../model/subcategories.model";

export default {
  GET: async (_: Request, res: Response) => {
    try {
      res.json(await sub_catebories.find());
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
