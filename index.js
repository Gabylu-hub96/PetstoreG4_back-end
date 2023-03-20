require("dotenv/config");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const petsRouter = require("./routes/pets");
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/Petshop", petsRouter);
app.use("/favicon.ico", (req, res) => {
  res.status(204).end();
}); //added middleware

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
});
