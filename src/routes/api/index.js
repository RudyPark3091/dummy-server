import express from "express";
import todoRouter from "./todos";

const router = express.Router();

router.get("/", (req, res) => {
  setTimeout(() => {
    res.send("api router operational");
  }, 1500);
});

router.use("/todos", todoRouter);

export default router;
