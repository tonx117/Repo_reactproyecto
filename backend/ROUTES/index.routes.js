import express from "express";
import { usuarioctrl } from "../controllers/usuario.controllers.js";

const router = express.Router();

router.get("/", (req, res) => usuarioctrl.indexView(req, res));
router.get("/usuario/create", usuarioctrl.createView);
router.get("/usuario/:id/edit", usuarioctrl.editView);

export default router;
