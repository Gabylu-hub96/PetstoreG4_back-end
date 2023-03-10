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

connectDB((err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} `);
    });
    db = getDb();
  }
});

//API routes
app.get("/pets", (req, res) => {
  let pets = [];

  db.collection("pets")
    .find()
    .sort({ breed: 1 })
    .forEach((pet) => pets.push(pet))
    .then(() => {
      res.status(200).json(pets);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the files" });
    });
});