import { Request, Response } from "express";
import orders from "../model/orders.model";

export default {
  GET: async (_: Request, res: Response) => {
    try {
      res.json(await orders.find());
    } catch (err) {
      throw new Error(err.message);
    }
  },
  POST: async (req: Request, res: Response) => {
    try {
      const { order, order_holder, phone_number, address } = req.body;

      await orders.create({ order, order_holder, phone_number, address });

      res.json({
        status: "OK",
        message: "Order added",
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
