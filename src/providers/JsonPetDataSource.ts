import { PetDataSource } from "../interfaces/PetDataSource";
import { Pet } from "../models/pet.model";
import { promises as fs } from "fs";
import path from "path";

export class JsonPetDataSource implements PetDataSource {
  private readonly filePath: string;

  constructor(filePath?: string) {
    const defaultPath = path.join(__dirname, "../../data/pets.json");

    // if filePath is provided, turn it into absolute path if necessary
    if (filePath) {
      this.filePath = path.isAbsolute(filePath)
        ? filePath
        : path.resolve(process.cwd(), filePath);
    } else {
      this.filePath = defaultPath;
    }
  }

  async getAllPets(): Promise<Pet[]> {
    try {
      const raw = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(raw);
    } catch (err) {
      console.error("Failed to read pets.json", err);
      return [];
    }
  }

  async getPetById(id: number): Promise<Pet | undefined> {
    const pets = await this.getAllPets();
    return pets.find((p) => p.id === id);
  }
}
