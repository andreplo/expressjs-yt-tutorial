import express from "express";
import { Router } from "express";
import { fileURLToPath } from "url";

import path from "path";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("^/$|/index(.html)?", (req, res) => {
	// res.sendFile("./views/index.html", { root: __dirname });
	res.sendFile(path.join(__dirname, "..", "views", "subdir", "index.html"));
});
router.get("/test(.html)?", (req, res) => {
	// res.sendFile("./views/index.html", { root: __dirname });
	res.sendFile(path.join(__dirname, "..", "views", "subdir", "test.html"));
});

export { router };
