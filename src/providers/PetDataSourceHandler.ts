import dotenv from "dotenv";
dotenv.config();

import { PetDataSource as PetDataSourceInterface } from "../interfaces/PetDataSource";
import { JsonPetDataSource } from "./JsonPetDataSource";

export const PetDataSource: PetDataSourceInterface = (() => {
  const source = process.env.DATA_SOURCE?.toLowerCase();
  const filePath = process.env.JSON_DATA_PATH;

  switch (source) {
    case "json":
      return new JsonPetDataSource(filePath);
    default:
      throw new Error(`Unknown DATA_SOURCE: ${source}`);
  }
})();
