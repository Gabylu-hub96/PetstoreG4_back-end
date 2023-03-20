const express = require("express");
const router = express.Router();
const {
  getAllPets,
  getPetsPaginated,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} = require("../controllers/pets");

router.get("/", getAllPets);
router.get("/pet", getPetsPaginated);
router.get("/:id", getPetById);
router.post("/", createPet);
router.put("/:id", updatePet);
router.delete("/:id", deletePet);

module.exports = router;
