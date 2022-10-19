import { Request, Response } from "express";
import products from "../model/products.model";
import multer from "multer";
multer({ dest: "uploads/" });

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
      const imgs = req.files;
      const { name, price, description, categorieID } = req.body;

      const createdProduct = await products.create({
        name: name,
        price: price,
        imgs: imgs,
        description: description,
        categorieID: categorieID,
      });

      console.log(imgs, req.body);

      res.json(createdProduct);
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
