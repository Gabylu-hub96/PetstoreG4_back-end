const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    animalType: { type: String, required: [true, "Animal type is required!"] },
    breed: { type: String, required: [true, "Animal breed is required!"] },
    size: { type: String, required: [true, "Animal size is required!"] },
    age: { type: Number, required: [true, "Animal age is required!"] },
    gender: { type: String, required: [true, "Animal gender is required!"] },
    playfulness: {
      type: Number,
      required: [true, "Animal playfulness is required!"],
    },
    care: { type: String, required: [true, "Animal care is required!"] },
    image: { type: String, required: [true, "Animal image is required!"] },
  },
  { timestamps: true }
);

const model = mongoose.model("Pet", petSchema);
module.exports = model;
