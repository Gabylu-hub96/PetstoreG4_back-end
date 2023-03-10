const express = require("express");
const router = express.Router();
const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} = require("../controllers/pets");

router.get("/", getAllPets);
router.get("/:id", getPetById);
router.post("/", createPet);
router.put("/:id", updatePet);
router.delete("/:id", deletePet);

module.exports = router;
