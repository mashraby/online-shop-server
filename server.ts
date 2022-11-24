import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connection as mongo } from "./src/config/mongo";
import router from "./src/routes/routes";
import path from "path";

const app: express.Application = express();
const PORT = 8000 || process.env.PORT;

mongo()
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);
app.use(
  "/api/v1/uploads",
  express.static(path.join(__dirname, "src", "uploads"))
);
app.use("/*", (_, res) => res.sendStatus(404));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
