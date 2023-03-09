require("dotenv/config");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const petsRouter = require("./routes/pets");
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/pets", petsRouter);

app.get("/", (req, res) => {
  res.send("<h1>Pets API</h1>");
});

//API
app.get("/api/pets", (req, res) => {
  res.json(pets);
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
  });
});
