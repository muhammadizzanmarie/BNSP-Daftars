const express = require("express");
const cors = require("cors");
const router = require("./api/v1/router.js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

// const PORT = process.env.PORT || 4200;
app.listen(process.env.PORT || 4200, "0.0.0.0", () => {
  console.log(`Server running on port ${process.env.PORT || 4200}`);
});
