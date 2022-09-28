import { Request, Response } from "express";
import products from "../model/products.model";

export default {
  GET: async (req: Request, res: Response) => {
    try {
      res.json(await products.find());
    } catch (err) {
      throw new Error(err.message);
    }
  },
  POST: async (req: Request, res: Response) => {
    try {
      const { name, price, imgs, description, categorieID } = req.body;

      const createdProduct = await products.create({
        name,
        price,
        imgs,
        description,
        categorieID,
      });

      res.json(createdProduct);
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
