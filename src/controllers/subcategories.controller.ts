import { Request, Response } from "express";
import sub_catebories from "../model/subcategories.model";
import validator from "../validations/subCategoryValidator";
import categories from "../model/categories.model";

export default {
  GET: async (_: Request, res: Response) => {
    try {
      res.json(
        await sub_catebories.find().populate({
          path: "products",
          select: "_id name price imgs description created_at",
        })
      );
    } catch (err) {
      throw new Error(err.message);
    }
  },
  POST: async (req: Request, res: Response) => {
    try {
      const { name, categoryID } = req.body;
      const { error, value } = validator.validateSubCategory(req.body);

      if (error) {
        return res.send(error.details);
      }

      const newSubCategory = new sub_catebories({
        name: name,
        categoryID: categoryID,
      });

      const foundCategory = (await categories.findById({
        _id: categoryID,
      })) as any;

      foundCategory.sub_categories.push(newSubCategory._id);

      foundCategory.save();
      newSubCategory.save();

      res.json({
        status: 200,
        message: "Added new subcategory",
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
