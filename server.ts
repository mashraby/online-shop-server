import express from "express";
import cors from "cors";
import { connection as mongo } from "./src/config/mongo";
import router from "./src/routes/routes";

const app: express.Application = express();
const PORT = 8000 || process.env.PORT;

mongo()
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
