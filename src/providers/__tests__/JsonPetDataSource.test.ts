import { JsonPetDataSource } from "../JsonPetDataSource";
import { Pet } from "../../models/pet.model";
import path from "path";
import fs from "fs/promises";

describe("JsonPetDataSource", () => {
  const testDataPath = path.resolve(__dirname, "../../../data/test-pets.json");

  const mockPets: Pet[] = [
    {
      id: 1,
      name: "Rex",
      species: "Dog",
      birthYear: 2018,
      available: true,
      photoUrl: "http://example.com/dog.jpg",
      dateAdded: "2024-01-01",
    },
    {
      id: 2,
      name: "Beyoncé",
      species: "Cat",
      birthYear: 2020,
      available: false,
      photoUrl: "http://example.com/cat.jpg",
      dateAdded: "2024-01-01",
    },
  ];

  beforeAll(async () => {
    await fs.writeFile(testDataPath, JSON.stringify(mockPets), "utf-8");
  });

  afterAll(async () => {
    await fs.unlink(testDataPath);
  });

  it("reads pets from a valid JSON file", async () => {
    const dataSource = new JsonPetDataSource(testDataPath);
    const pets = await dataSource.getAllPets();
    expect(pets.length).toBe(2);
    expect(pets[0].name).toBe("Rex");
  });

  it("returns a specific pet by ID", async () => {
    const dataSource = new JsonPetDataSource(testDataPath);
    const pet = await dataSource.getPetById(2);
    expect(pet?.name).toBe("Beyoncé");
  });

  it("returns undefined for a non-existent ID", async () => {
    const dataSource = new JsonPetDataSource(testDataPath);
    const pet = await dataSource.getPetById(9999);
    expect(pet).toBeUndefined();
  });

  it("uses the default path if no filePath is passed", async () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});

    const dataSource = new JsonPetDataSource();
    const pets = await dataSource.getAllPets();

    expect(Array.isArray(pets)).toBe(true);
    spy.mockRestore();
  });

  it("returns an empty array when the file does not exist", async () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});

    const dataSource = new JsonPetDataSource("invalid-file.json");
    const pets = await dataSource.getAllPets();

    expect(pets).toEqual([]);

    spy.mockRestore();
  });
});
