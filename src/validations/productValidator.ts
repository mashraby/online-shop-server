import Joi from "joi";

// Products validators
const productValidator = (schema: any) => (payload: any) =>
  schema.validate(payload, { abortEarly: false });

const productSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  price: Joi.number().required(),
  imgs: Joi.array()
    .min(5)
    .max(5)
    .items(Joi.object({ url: Joi.string }))
    .required(),
  description: Joi.string().min(15).max(400).required(),
  categorieID: Joi.string().required(),
});

export default {
  validateProduct: productValidator(productSchema),
};
