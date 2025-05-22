import express from "express";
import dotenv from "dotenv";
import petsRouter from "./routes/pets.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

console.log(port);

app.use("/pets", petsRouter);

//  Handle unknown routes being called
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint does not exist" });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
