// eslint-disable-next line is in this file because it's required to reload PetDataSourceHandler with fresh process.env

describe("PetDataSourceHandler", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("returns JsonPetDataSource when DATA_SOURCE=json", () => {
    process.env.DATA_SOURCE = "json";

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PetDataSource } = require("../PetDataSourceHandler");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { JsonPetDataSource } = require("../JsonPetDataSource");

    expect(PetDataSource).toBeInstanceOf(JsonPetDataSource);
  });

  it("throws an error when DATA_SOURCE is invalid", () => {
    process.env.DATA_SOURCE = "invalid";

    expect(() => {
      require("../PetDataSourceHandler");
    }).toThrow("Unknown DATA_SOURCE: invalid");
  });

  it("defaults to JsonPetDataSource if no DATA_SOURCE is provided", () => {
    delete process.env.DATA_SOURCE;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PetDataSource } = require("../PetDataSourceHandler");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { JsonPetDataSource } = require("../JsonPetDataSource");

    expect(PetDataSource).toBeInstanceOf(JsonPetDataSource);
  });
});
