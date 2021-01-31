import express from "express";
import controller from "./todos.controller";

const router = express.Router();

router.get("/", (req, res) => {
	const data = controller.findAll();
	res.send(data);
});

router.get("/:id", (req, res) => {
	const data = controller.findById(req.params.id);
	res.send(data);
})

router.post("/", (req, res) => {
	const body = req.body;
	controller.create(body);
	res.send(body);
})

export default router;
