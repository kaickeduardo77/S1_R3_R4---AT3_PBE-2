import express from "express";
import controllerCliente from "../controllers/clienteController.js";

const router = express.Router();


router.post("/clientes", controllerCliente.criarCliente);


router.get("/clientes", controllerCliente.listarClientes);


router.put("/clientes", controllerCliente.editarCliente);


router.delete("/clientes/:id", controllerCliente.excluirCliente);

export default router;