import { PetDataSource } from "../providers/PetDataSourceHandler";
import { Pet } from "../models/pet.model";

/**
 * Fetch all available pets.
 */
export const fetchAllPets = (): Promise<Pet[]> => {
  return PetDataSource.getAllPets();
};

/**
 * Fetch singular pet by id.
 */
export const fetchPetById = (id: number): Promise<Pet | undefined> => {
  return PetDataSource.getPetById(id);
};
