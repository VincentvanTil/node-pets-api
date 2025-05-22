import { Request, Response } from "express";
import { fetchAllPets, fetchPetById } from "../services/pets.service";

export const getAllPets = async (req: Request, res: Response) => {
  const pets = await fetchAllPets();
  res.json(pets);
};

export const getPetById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const pet = await fetchPetById(id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID type" });
  if (!pet) return res.status(404).json({ message: "Pet not found" });
  res.json(pet);
};
