import { Router } from "express";
import categoriaRoutes from "./categoriaRoutes.js";
import produtoRoutes from "./produtoRoutes.js";
import clienteRoutes from "./clienteRoutes.js";

const routes = Router();

routes.use('/categoria', categoriaRoutes);
routes.use('/produto', produtoRoutes);
routes.use('/cliente',clienteRoutes);

export default routes;