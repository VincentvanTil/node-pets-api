import express from "express";
import dotenv from "dotenv";
import petsRouter from "./routes/pets.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/pets", petsRouter);

//  Handle unknown routes being called
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint does not exist" });
});

export default app;

/* istanbul ignore next */
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
