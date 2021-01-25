import express from "express";
import controller from "./todos.controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("this will return todo items");
});

export default router;
