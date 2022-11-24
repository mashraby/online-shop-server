import Joi from "joi";

// SubCategory validators
const subCategoryValidator = (schema: any) => (payload: any) =>
  schema.validate(payload, { abortEarly: false });

const subCategorySchema = Joi.object({
  name: Joi.string().min(2).max(60).required(),
  categoryID: Joi.string().required(),
});

export default {
  validateSubCategory: subCategoryValidator(subCategorySchema),
};
