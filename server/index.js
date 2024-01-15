import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
const app = express();
//config file
dotenv.config();

const PORT = process.env.PORT;
//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.listen(PORT, () => {
  console.log(`Server listning to port number ${PORT}`.bgBlue);
});
