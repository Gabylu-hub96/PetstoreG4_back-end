const Pet = require("../models/pet");

const createPet = async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find({});
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPetById = async (req, res) => {
  try {
    const pets = await Pet.find({ _id: req.params.id });
    if (pets.length === 0) {
      res.status(404).json({ message: "Pet Not Found" });
    }
    res.json(pets[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePet = async (req, res) => {
  try {
    const updatedPet = await Pet.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedPet) {
      res.status(404).json({ message: "Pet Not Found" });
    }
    res.json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePet = async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    if (!deletedPet) {
      res.status(404).json({ message: "Pet Not Found" });
    }
    res.json(deletedPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPet,
  getAllPets,
  getPetById,
  updatePet,
  deletePet,
};
