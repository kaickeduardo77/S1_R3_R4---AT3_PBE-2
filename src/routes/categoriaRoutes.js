import { Router } from "express";
import controllerCategoria from "../controllers/categoriaControllers.js";

const router = Router();

router.post("/", controllerCategoria.cadastrar);
router.put("/:id", controllerCategoria.editar);
router.delete("/:id", controllerCategoria.excluir);
router.get("/", controllerCategoria.listar);

export default router;