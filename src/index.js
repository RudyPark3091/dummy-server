import express, { Router } from "express";
import apiRouter from "./routes/api/";

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("server operational");
});

app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
