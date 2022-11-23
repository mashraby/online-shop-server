import Joi from "joi";

// Login validators
const loginValidator = (schema: any) => (payload: any) =>
  schema.validate(payload, { abortEarly: false });

const loginSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(8).max(32).required(),
});

export default {
  validateLogin: loginValidator(loginSchema),
};
