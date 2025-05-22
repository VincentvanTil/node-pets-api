import { Router } from "express";
import { getAllPets, getPetById } from "../controllers/pets.controller";

const router = Router();

router.get("/", getAllPets);
router.get("/:id", getPetById);

export default router;
