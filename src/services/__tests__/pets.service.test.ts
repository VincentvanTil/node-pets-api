import { fetchAllPets, fetchPetById } from "../pets.service";

describe("fetchAllPets", () => {
  it("returns an array of pets", async () => {
    const pets = await fetchAllPets();
    expect(Array.isArray(pets)).toBe(true);
    expect(pets.length).toBeGreaterThan(0);
  });
});

describe("fetchPetById", () => {
  it("returns a pet by ID", async () => {
    const pet = await fetchPetById(1);
    expect(pet).toBeDefined();
    expect(pet?.id).toBe(1);
  });

  it("returns undefined for missing pet", async () => {
    const pet = await fetchPetById(999999);
    expect(pet).toBeUndefined();
  });
});
