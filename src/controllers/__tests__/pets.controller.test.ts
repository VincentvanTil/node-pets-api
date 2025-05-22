import request from "supertest";
import app from "../../index";

describe("GET /pets", () => {
  it("should return an array", async () => {
    const response = await request(app).get("/pets");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("GET /pets/:id", () => {
  it("should return a pet if found", async () => {
    const response = await request(app).get("/pets/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
  });

  it("should return 404 if pet not found", async () => {
    const response = await request(app).get("/pets/99999");
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "Pet not found");
  });

  it("should return 400 for invalid ID type", async () => {
    const response = await request(app).get("/pets/notanumber");
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Invalid ID type");
  });
});

describe("GET /unknown", () => {
  it("should return 404 for unmapped route", async () => {
    const response = await request(app).get("/doesnotexist");
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "Endpoint does not exist");
  });
});
