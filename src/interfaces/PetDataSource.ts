import { Pet } from "../models/pet.model";

export interface PetDataSource {
  /**
   * Fetch all available pets.
   */
  getAllPets(): Promise<Pet[]>;

  /**
   * Fetch singular pet by ID.
   */
  getPetById(id: number): Promise<Pet | undefined>;
}
