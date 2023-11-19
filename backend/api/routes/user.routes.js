import { Router } from "express";
import usuarioctrl from "../controllers/usuario.controllers.js";

const router = Router();

router.get("/usuario", usuarioctrl.index);
router.post("/usuario", usuarioctrl.store);
router.get("/usuario/:id", usuarioctrl.show);
router.put("/usuario/:id", usuarioctrl.update);
router.delete("/usuario/:id", usuarioctrl.destroy);
router.post("/usuario/login", usuarioctrl.login);

export default router;
