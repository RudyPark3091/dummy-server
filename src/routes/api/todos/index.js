import express from "express";
import controller from "./todos.controller";

const router = express.Router();

router.get("/", (req, res) => {
	const data = controller.findAll();
	res.status(200).send(data);
});

router.get("/:id", (req, res) => {
	const data = controller.findById(req.params.id);
	res.status(200).send(data);
});

router.post("/", (req, res) => {
	const body = req.body;
	controller.create(body);
	res.status(201).json({ message: "created" });
});

router.put("/:id", (req, res) => {
	const body = req.body;
	if (controller.update(req.params.id, body))
		res.status(200).json({ message: "updated" });
	else
		res.status(404).json({ message: `item with ${id} not found` });
})

router.delete("/:id", (req, res) => {
	if (controller.delete(id))
		res.status(200).json({ message: "deleted" });
	else
		res.status(404).json({ message: `item with ${id} not found`});
})

export default router;
