export interface Pet {
  id: number;
  name: string;
  species: "Cat" | "Dog";
  available: boolean;
  birthYear: number;
  dateAdded: string;
  photoUrl: string;
}
