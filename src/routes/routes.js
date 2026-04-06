import { Router } from "express";
const routes = Router();
import categoriaRoutes from "./categoriaRoutes.js";
import produtoRoutes from "./produtoRoutes.js";

routes.use('/categoria', categoriaRoutes);
routes.use('/produto', produtoRoutes);

export default routes;