import { Request, Response } from "express";
import AdminModel from "../model/admins.model";
import validator from "../validations/loginValidator";
import jwt from "../utils/jwt";
import bcrypt from "bcryptjs";

export default {
  LOGIN: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const { error, value } = validator.validateLogin(req.body);

      if (error) {
        console.log(error, value);

        return res.send(error.details);
      }

      const foundAdmin = await AdminModel.findOne({
        username: username,
      });

      const comparePassword = await bcrypt.compare(
        password,
        foundAdmin.password
      );

      if (foundAdmin && comparePassword === true) {
        res.json({
          status: 200,
          access_token: jwt.sign({
            username: foundAdmin.username,
            role: foundAdmin.role,
          }),
        });
      }
      res.json({
        message: "No such admin exists",
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
