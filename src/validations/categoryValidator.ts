import Joi from "joi";

// Category validators
const categoryValidator = (schema: any) => (payload: any) =>
  schema.validate(payload, { abortEarly: false });

const categorySchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
});

export default {
  validateCategory: categoryValidator(categorySchema),
};
