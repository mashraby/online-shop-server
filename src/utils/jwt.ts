import jwt, { JwtPayload } from "jsonwebtoken";

const sign = (payload: JwtPayload) =>
  jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 20000000,
  });

export default {
  sign,
};
