import { Request, Response } from "express";
import products from "../model/products.model";
import categories from "../model/categories.model";
import mongoose from "mongoose";

export default {
  GET: async (_: Request, res: Response) => {
    try {
      res.json(await products.find());
    } catch (err) {
      throw new Error(err.message);
    }
  },
  GET_BY_ID: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      res.json(await products.findById({ _id: id }));
    } catch (err) {
      throw new Error(err.message);
    }
  },
  GET_CATEGORIE_ID: async (req: Request, res: Response) => {
    try {
      const { ctgId } = req.params;

      const ctgProducts = await products.find({ categorieID: ctgId });

      console.log(ctgProducts);

      res.send("ok");
    } catch (err) {
      throw new Error(err.message);
    }
  },
  POST: async (req: Request, res: Response) => {
    try {
      const imgs = req.files as any;
      const { name, price, description, categorieID } = req.body;

      for (let i = 0; i < imgs.length; i++) {
        let element = imgs[i];

        element.url = "http://localhost:8000/api/v1/" + element.originalname;
      }

      const newProduct = new products({
        name: name,
        price: price,
        imgs: imgs,
        description: description,
        categorieID: categorieID,
        created_at: Date.now(),
      });

      const foundCategory = (await categories.findById({
        _id: categorieID,
      })) as any;

      foundCategory.products.push(newProduct._id);

      await foundCategory.save();
      await newProduct.save();

      res.json({
        status: "OK",
        message: "Product added",
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  PUT: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const imgs = req.files as any;
      const { name, price, description } = req.body;

      for (let i = 0; i < imgs.length; i++) {
        const element = imgs[i];

        element.url = "http://localhost:8000/api/v1/" + element.originalname;
      }

      await products.findByIdAndUpdate(id, { name, price, imgs, description });

      res.json({
        status: "OK",
        message: "The product has been changed",
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  DELETE: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await products.findByIdAndDelete(id);

      res.json({
        status: "OK",
        message: "The category has been removed",
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
