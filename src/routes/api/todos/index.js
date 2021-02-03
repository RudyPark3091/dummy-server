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
	res.status(200).send(body);
});

router.put("/:id", (req, res) => {
	const body = req.body;
	controller.update(body);
	res.status(200).send(body);
})

router.delete("/:id", (req, res) => {
	if (controller.delete(id))
		res.status(200).send({ message: "deleted" });
	else
		res.status(404).send({ message: `item with ${id} not found`});
})

export default router;
