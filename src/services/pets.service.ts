import { promises as fs } from "fs";
import path from "path";
import { Pet } from "../models/pet.model";

const dataPath = path.join(__dirname, "../../data/pets.json");

export const fetchAllPets = async (): Promise<Pet[]> => {
  const raw = await fs.readFile(dataPath, "utf-8");
  return JSON.parse(raw);
};

export const fetchPetById = async (id: number): Promise<Pet | undefined> => {
  const pets = await fetchAllPets();
  return pets.find((p: Pet) => p.id === id);
};
