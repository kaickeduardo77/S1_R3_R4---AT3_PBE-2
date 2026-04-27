import { Router } from "express";
import produtoControllers from "../controllers/produtoControllers.js";

const router = Router();

router.post("/", produtoControllers.criar);
router.put("/:id", produtoControllers.atualizar);
router.delete("/:id", produtoControllers.deletar);
router.get("/", produtoControllers.selecionar);

export default router;