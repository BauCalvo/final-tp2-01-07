import { Router } from "express";
import SondaController from "../controllers/SondaController.js";
const sondaController = new SondaController();

const sondaRoutes = Router();

sondaRoutes.post("/",sondaController.create );

sondaRoutes.get("/",sondaController.getAll );
sondaRoutes.get("/:id",sondaController.getById );


export default sondaRoutes;