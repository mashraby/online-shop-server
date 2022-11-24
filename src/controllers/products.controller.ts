import { Request, Response } from "express";
import products from "../model/products.model";
import subcategories from "../model/subcategories.model";
import validator from "../validations/productValidator";

export default {
  GET: async (_: Request, res: Response) => {
    try {
      res.json([]);
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
  POST: async (req: Request, res: Response) => {
    try {
      const imgs = req.files as any;
      const { name, model, price, description, sub_categorieID } = req.body;

      const { error, value } = validator.validateProduct(req.body);

      if (error) {
        console.log(error, value);
        return res.send(error.details);
      }

      for (let i = 0; i < imgs.length; i++) {
        let element = imgs[i];

        element.url = "http://localhost:8000/api/v1/" + element.originalname;
      }

      const newProduct = new products({
        name: name,
        model: model,
        price: price,
        imgs: imgs,
        description: description,
        sub_categorieID: sub_categorieID,
        created_at: Date.now(),
      });

      const foundSubCategory = (await subcategories.findById({
        _id: sub_categorieID,
      })) as any;

      foundSubCategory.products.push(newProduct._id);

      await foundSubCategory.save();
      await newProduct.save();

      res.json({
        status: 200,
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
