import Joi from "joi";

// Products validators
const productValidator = (schema: any) => (payload: any) =>
  schema.validate(payload, { abortEarly: false });

const productSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  model: Joi.string().min(2).max(30).required(),
  price: Joi.number().required(),
  description: Joi.string().min(15).max(400).required(),
  sub_categoryID: Joi.string().required(),
});

export default {
  validateProduct: productValidator(productSchema),
};
