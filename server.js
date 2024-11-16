import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// load env variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// create express app
const app = express();

// cors
app.use(cors());

// for parsing json bodies
app.use(express.json());

app.get("/name", (req, res) => {
  res.status(200).send("Beamlak Tesfahun");
});

app.get("/hobby", (req, res) => {
  res.status(200).json({ hobby: "Reading Books" });
});

app.get("/dream", (req, res) => {
  res
    .status(200)
    .send(
      "My dream is to become the best version of myself. I want to get really good at backend development and eventually expand my skills to become a full-stack developer."
    );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
