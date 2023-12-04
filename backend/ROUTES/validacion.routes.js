import { Router } from "express";
import {
  createUserCtrl,
  getUsersCtrl,
  getUserByIdCtrl,
} from "../controllers/usuario.controllers.js";
import { validateSchema } from "../middleware/validacion.js";
import { createUserSchema } from "../model/user.model.js";

const userRouter = Router();

userRouter.get("/", getUsersCtrl);
userRouter.get("/:id", getUserByIdCtrl);

userRouter.post("/", createUserSchema, validateSchema, createUserCtrl);

export { userRouter };
