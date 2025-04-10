import express from "express";
import cors from "cors";
import router from "./api/v1/router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
